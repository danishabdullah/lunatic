\echo # Creating search_profiles functionality
set search_path = api, public;
create or replace function search_profiles(query text) returns setof profiles as $$
select * from profiles where id::text like query
$$ stable language sql;
