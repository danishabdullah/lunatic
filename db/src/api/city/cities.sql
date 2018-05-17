\echo # Creating cities view
set search_path = api, public;
create or replace view cities as
select 
    
    id as id,
    name,
    ascii_name,
    alternate_names,
    latitude,
    longitude,
    timezone,
    updated_at,
    created_at,
    country_iso
from data.city t;
alter view cities owner to api; -- it is important to set the correct owner to the RLS policy kicks in
