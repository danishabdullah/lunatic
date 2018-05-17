\echo # Creating country table
create table "country"(
    -- Columns
    iso                   iso primary key not null default 'de'::iso,
    iso3                  char(3) unique not null default 'deu'::char(3),
    iso_numeric           smallint unique not null default 276,
    name                  varchar(256) not null default 'germany'::varchar(256),
    capital               varchar(256) not null default 'berlin'::varchar(256),
    population            integer not null default 81802257,
    currency_code         char(3) not null default 'eur'::char(3),
    currency_name         varchar(50) not null default 'euro'::varchar(50),
    neighbours            iso[] default '{ch,pl,nl,dk,be,cz,lu,fr,at}'::iso[],
    updated_at            timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at            timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    
    
    -- Checks
    check (population between 0 and 2000000000)
);



create trigger updated_at_mdt
    before update on "country"
    for each row
    execute procedure moddatetime (updated_at);

