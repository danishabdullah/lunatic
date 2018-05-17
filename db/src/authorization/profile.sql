\echo setting privileges for profile
-- grant appropriate profile permissions
alter table data.profile enable row level security;
create policy profile_access_policy on data.profile to api 
using (
    -- who can view row
    (request.user_role() = 'webuser')
)
with check (
    -- who can alter row
    (request.user_role() = 'webuser' and request.user_id() = owner_id)
);
---- give access to the view owner
grant select, insert, update, delete on data.profile to api;
-- give access to user groups
grant select, insert, update, delete on api.profiles to webuser;

