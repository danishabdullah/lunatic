\echo # Creating countries view
set search_path = api, public;
create or replace view countries as
select 
    
    iso as iso,
    name,
    currency_code,
    currency_name
from data.country t;
alter view countries owner to api; -- it is important to set the correct owner to the RLS policy kicks in
