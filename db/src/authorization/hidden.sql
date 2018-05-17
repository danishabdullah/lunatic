\echo setting privileges for hidden
-- grant appropriate hidden permissions
alter table data.hidden enable row level security;
create policy hidden_access_policy on data.hidden to api 
using (
    -- who can view row
    (request.user_role() = 'webuser' and (request.user_id() = by_user or request.user_id() = hidden_user))
)
with check (
    -- who can alter row
    (request.user_role() = 'webuser' and (request.user_id() = by_user or request.user_id() = hidden_user))
);
---- give access to the view owner
grant select, insert, update, delete on data.hidden to api;
-- give access to user groups
grant select, insert, update, delete on api.hiddens to webuser;

