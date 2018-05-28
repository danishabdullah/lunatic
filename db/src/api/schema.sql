\echo Creating the api schema
drop schema if exists api cascade;
create schema api;
set search_path = api, public;

-- this role will be used as the owner of the views in the api schema
-- it is needed for the definition of the RLS policies
drop role if exists api;
create role api;
grant api to current_user; -- this is a workaround for RDS where the master user does not have SUPERUSER priviliges  

-- redefine this type to control the user properties returned by auth endpoints
\ir ../libs/auth/api/types/user.sql
-- include all auth endpoints
\ir ../libs/auth/api/all.sql

-- our endpoints

-- uisetup
\ir uisetup/uisetups.sql

\ir rpc/uisetups.sql

-- conversation
\ir conversation/conversations.sql

\ir rpc/conversations.sql

-- message
\ir message/messages.sql

\ir rpc/messages.sql

-- match
\ir match/matches.sql

\ir rpc/matches.sql

-- hidden
\ir hidden/hiddens.sql

\ir rpc/hiddens.sql

-- country
\ir country/countries.sql

\ir rpc/countries.sql

-- city
\ir city/cities.sql

\ir rpc/cities.sql

-- userlocation
\ir userlocation/userlocations.sql

\ir rpc/userlocations.sql

-- profile
\ir profile/profiles.sql

\ir rpc/profiles.sql

