\echo setting privileges for match
-- grant appropriate match permissions
alter table data.match enable row level security;
create policy match_access_policy on data.match to api 
using (
    -- who can view row
    (request.user_role() = 'webuser' and (request.user_id() = left_user_id or request.user_id() = right_user_id))
)
with check (
    -- who can alter row
    (request.user_role() = 'webuser' and (request.user_id() = left_user_id or request.user_id() = right_user_id))
);
---- give access to the view owner
grant select, insert, update, delete on data.match to api;
-- give access to user groups
grant select, insert, update, delete on api.matchs to webuser;

