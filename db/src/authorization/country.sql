\echo setting privileges for country
-- grant appropriate country permissions

---- give access to the view owner
grant select on data.country to api;
-- give access to user groups
grant select on api.countries to webuser;
grant select on api.countries to anonymous;
