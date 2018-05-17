\echo # Creating hidden table
create table "hidden"(
    -- Columns
    id                  bigserial primary key,
    updated_at          timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at          timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    by_user             bigint references "user"("id")  not null,
    hidden_user         bigint references "user"("id")  not null
    
    -- Checks
    
);



create trigger updated_at_mdt
    before update on "hidden"
    for each row
    execute procedure moddatetime (updated_at);

