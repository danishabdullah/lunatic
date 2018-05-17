\echo # Creating search_countries functionality
set search_path = api, public;
create or replace function search_countries(query text) returns setof countries as $$
select * from countries where iso::text like query
$$ stable language sql;
