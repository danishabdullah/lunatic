\echo # Creating message table
create table "message"(
    -- Columns
    id                      bigserial primary key,
    content                 varchar(2048),
    updated_at              timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at              timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    conversation_id         bigserial references "conversation"("id")  not null,
    "from"                  bigint references "user"("id")  not null,
    "to"                    bigint references "user"("id")  not null,
    
    -- Checks
    check (length("content") > 10)
);



create trigger updated_at_mdt
    before update on "message"
    for each row
    execute procedure moddatetime (updated_at);

