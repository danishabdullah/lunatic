\echo setting privileges for userlocation
-- grant appropriate userlocation permissions
alter table data.userlocation enable row level security;
create policy userlocation_access_policy on data.userlocation to api 
using (
    -- who can view row
    (request.user_role() = 'webuser' and request.user_id() = owner_id)
)
with check (
    -- who can alter row
    (request.user_role() = 'webuser' and request.user_id() = owner_id)
);
---- give access to the view owner
grant select, insert, update, delete on data.userlocation to api;
-- give access to user groups
grant select, insert, update, delete on api.userlocations to webuser;

