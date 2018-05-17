\echo # Creating user table
create table "user"(
    -- Columns
    id                                bigserial primary key,
    email                             email unique not null,
    "password"                        varchar(72) not null,
    has_verified_email                boolean not null default false,
    email_verification_code           uuid,
    "role"                            user_role not null default settings.get('auth.default-role')::user_role,
    facebook_id                       varchar(128),
    facebook_access_token             varchar(4096),
    forgotten_password_secret         varchar(256),
    updated_at                        timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at                        timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    
    
    -- Checks
    check (length("password") > 12)
);

create trigger user_encrypt_pass_trigger
    before insert or update on "user"
    for each row
    execute procedure auth.encrypt_pass();

-- attach the trigger to send events to rabbitmq
-- there is a 8000 bytes hard limit on the message payload size (PG NOTIFY) so it's better not to send data that is not used
-- on_row_change call can take the following forms
-- on_row_change() - send all columns
-- on_row_change('{"include":["id"]}'::json) - send only the listed columns
-- on_row_change('{"exclude":["bigcolumn"]}'::json) - exclude listed columns from the payload

create trigger send_change_event
    after insert or update or delete on "user"
    for each row execute procedure rabbitmq.on_row_change('{"include":["id","email"]}');

create trigger updated_at_mdt
    before update on "user"
    for each row
    execute procedure moddatetime (updated_at);

