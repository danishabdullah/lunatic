\echo # Creating uisetup table
create table "uisetup"(
    -- Columns
    name               varchar(64) primary key,
    details            jsonb not null,
    updated_at         timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at         timestamp with time zone not null default CURRENT_TIMESTAMP
    
    -- References
    
    
    -- Checks
    
);



create trigger updated_at_mdt
    before update on "uisetup"
    for each row
    execute procedure moddatetime (updated_at);

