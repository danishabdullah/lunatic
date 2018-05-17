\echo # Creating search_hiddens functionality
set search_path = api, public;
create or replace function search_hiddens(query text) returns setof hiddens as $$
select * from hiddens where id::text like query
$$ stable language sql;
