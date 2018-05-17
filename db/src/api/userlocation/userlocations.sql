\echo # Creating userlocations view
set search_path = api, public;
create or replace view userlocations as
select 
    
    id as id,
    latitude,
    longitude,
    updated_at,
    created_at
from data.userlocation t;
alter view userlocations owner to api; -- it is important to set the correct owner to the RLS policy kicks in
