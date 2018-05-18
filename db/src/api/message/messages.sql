\echo # Creating messages view
set search_path = api, public;
create or replace view messages as
select 
    
    id as id,
    content,
    conversation_id,
    "from",
    "to"
from data.message t;
alter view messages owner to api; -- it is important to set the correct owner to the RLS policy kicks in
