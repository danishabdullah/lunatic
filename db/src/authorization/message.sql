\echo setting privileges for message
-- grant appropriate message permissions

---- give access to the view owner
grant select on data.message to api;
-- give access to user groups
grant select on api.messages to webuser;
grant select on api.messages to anonymous;
