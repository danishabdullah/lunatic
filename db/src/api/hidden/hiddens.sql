\echo # Creating hiddens view
set search_path = api, public;
create or replace view hiddens as
select 
    
    id as id,
    updated_at,
    created_at,
    by_user,
    hidden_user
from data.hidden t;
alter view hiddens owner to api; -- it is important to set the correct owner to the RLS policy kicks in
