\echo # Creating matchs view
set search_path = api, public;
create or replace view matchs as
select 
    
    ids_string as ids_string,
    left_liked,
    right_liked,
    updated_at,
    created_at,
    left_user_id,
    right_user_id
from data.match t;
alter view matchs owner to api; -- it is important to set the correct owner to the RLS policy kicks in
