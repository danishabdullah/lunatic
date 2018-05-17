\echo # Creating uisetups view
set search_path = api, public;
create or replace view uisetups as
select 
    
    name as name,
    details
from data.uisetup t;
alter view uisetups owner to api; -- it is important to set the correct owner to the RLS policy kicks in
