\echo # Creating match table
create table "match"(
    -- Columns
    ids_string            varchar(39) primary key,
    left_liked            boolean not null default false,
    right_liked           boolean not null default false,
    updated_at            timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at            timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    left_user_id          bigint references "user"("id")  not null,
    right_user_id         bigint references "user"("id")  not null
    
    -- Checks
    
);



create trigger updated_at_mdt
    before update on "match"
    for each row
    execute procedure moddatetime (updated_at);

