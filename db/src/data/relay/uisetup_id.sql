\echo # Installing relay_id(uisetup)
create or replace function relay_id(uisetup) returns text as $$
select encode(convert_to('uisetup:' || $1.name, 'utf-8'), 'base64')
$$ immutable language sql;
create index on uisetup (relay_id(uisetup.*)); 