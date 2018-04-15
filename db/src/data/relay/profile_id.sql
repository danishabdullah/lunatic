\echo # Installing relay_id(profile)
create or replace function relay_id(profile) returns text as $$
select encode(convert_to('profile:' || $1.id::text, 'utf-8'), 'base64')
$$ immutable language sql;
create index on profile (relay_id(profile.*)); 