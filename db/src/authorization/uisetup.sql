\echo setting privileges for uisetup
-- grant appropriate uisetup permissions

---- give access to the view owner
grant select on data.uisetup to api;
-- give access to user groups
grant select on api.uisetups to webuser;
grant select on api.uisetups to anonymous;
