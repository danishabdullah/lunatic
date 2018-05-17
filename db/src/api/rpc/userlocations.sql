\echo # Creating search_userlocations functionality
set search_path = api, public;
create or replace function search_userlocations(query text) returns setof userlocations as $$
select * from userlocations where id::text like query
$$ stable language sql;
