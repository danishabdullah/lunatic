\echo setting privileges for city
-- grant appropriate city permissions

---- give access to the view owner
grant select on data.city to api;
-- give access to user groups
grant select on api.cities to webuser;
grant select on api.cities to anonymous;
