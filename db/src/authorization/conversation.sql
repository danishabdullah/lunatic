\echo setting privileges for conversation
-- grant appropriate conversation permissions
alter table data.conversation enable row level security;
create policy conversation_access_policy on data.conversation to api 
using (
    -- who can view row
    (request.user_role() = 'webuser' and (request.user_id() = origin_user_id or request.user_id() = target_user_id))
)
with check (
    -- who can alter row
    (request.user_role() = 'webuser' and  (request.user_id() = origin_user_id or request.user_id() = target_user_id))
);
---- give access to the view owner
grant select, insert, update, delete on data.conversation to api;
-- give access to user groups
grant select, insert, update, delete on api.conversations to webuser;

