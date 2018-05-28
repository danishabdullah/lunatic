\echo # Creating search_matches functionality
set search_path = api, public;
create or replace function search_matches(query text) returns setof matches as $$
select * from matches where ids_string::text like query
$$ stable language sql;
