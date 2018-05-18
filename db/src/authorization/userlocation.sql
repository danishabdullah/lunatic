\echo setting privileges for userlocation
-- grant appropriate userlocation permissions

---- give access to the view owner
grant select on data.userlocation to api;
-- give access to user groups
grant select on api.userlocations to webuser;
grant select on api.userlocations to anonymous;
