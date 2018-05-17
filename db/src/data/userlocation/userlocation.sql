\echo # Creating userlocation table
create table "userlocation"(
    -- Columns
    id                 bigserial primary key,
    latitude           double precision,
    longitude          double precision,
    updated_at         timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at         timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    owner_id           bigint references "user"("id")  not null,
    
    -- Checks
    check (latitude >= -90.000000 and latitude <= 90.000000),
    check (longitude >= -180.000000 and longitude <= 180.000000)
);



create trigger updated_at_mdt
    before update on "userlocation"
    for each row
    execute procedure moddatetime (updated_at);

