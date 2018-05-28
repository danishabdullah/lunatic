\echo # Creating matches view
set search_path = api, public;
create or replace view matches as
select 
    
    ids_string as ids_string,
    left_liked,
    right_liked,
    left_user_id,
    right_user_id
from data.match t;
alter view matches owner to api; -- it is important to set the correct owner to the RLS policy kicks in
