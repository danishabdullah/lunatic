\echo # Creating search_uisetups functionality
set search_path = api, public;
create or replace function search_uisetups(query text) returns setof uisetups as $$
select * from uisetups where name::text like query
$$ stable language sql;
