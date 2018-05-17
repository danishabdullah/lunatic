\echo # Creating search_cities functionality
set search_path = api, public;
create or replace function search_cities(query text) returns setof cities as $$
select * from cities where id::text like query
$$ stable language sql;
