\echo # Creating uisetups view
create or replace view uisetups as
select data.relay_id(t.*) as id, name, details 
from data.uisetup t;
alter view uisetups owner to api; -- it is important to set the correct owner to the RLS policy kicks in