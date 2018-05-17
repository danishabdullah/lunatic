\echo # Creating search_conversations functionality
set search_path = api, public;
create or replace function search_conversations(query text) returns setof conversations as $$
select * from conversations where id::text like query
$$ stable language sql;
