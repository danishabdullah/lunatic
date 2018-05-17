\echo # Creating search_messages functionality
set search_path = api, public;
create or replace function search_messages(query text) returns setof messages as $$
select * from messages where id::text like query
$$ stable language sql;
