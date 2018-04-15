\echo # Creating search_todo functionality
create or replace function search_todos(query text) returns setof todos as $$
select * from todos where todo like query
$$ stable language sql;
