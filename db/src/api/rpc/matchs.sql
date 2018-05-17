\echo # Creating search_matchs functionality
set search_path = api, public;
create or replace function search_matchs(query text) returns setof matchs as $$
select * from matchs where ids_string::text like query
$$ stable language sql;
