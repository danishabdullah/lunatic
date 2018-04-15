\echo # Creating search_profiles functionality
create or replace function search_profiles(query text) returns setof profiles as $$
select * from profiles where name like query
$$ stable language sql;