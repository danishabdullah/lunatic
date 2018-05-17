\echo # Creating conversation table
create table "conversation"(
    -- Columns
    id                              bigserial primary key,
    success                         boolean not null default false,
    feedback                        varchar(1024),
    feedback_type                   feedback_type,
    feedback_theme                  feedback_theme[10],
    feedback_received_at            timestamp with time zone,
    marked_as_spam                  boolean,
    marked_as_bot                   boolean,
    marked_as_fake                  boolean,
    marked_as_impersonation         boolean,
    updated_at                      timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at                      timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    origin_user_id                  bigint references "user"("id")  not null,
    target_user_id                  bigint references "user"("id")  not null,
    
    -- Checks
    check (length("feedback") > 100)
);



create trigger updated_at_mdt
    before update on "conversation"
    for each row
    execute procedure moddatetime (updated_at);

