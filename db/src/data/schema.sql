drop schema if exists data cascade;
create schema data;
set search_path = data, public;

select settings.set('auth.data-schema', current_schema);

create extension if not exists moddatetime schema pg_catalog;
create extension if not exists cube schema pg_catalog;
create extension if not exists earthdistance schema pg_catalog;

-- Uisetup
\ir uisetup/types/all.sql
\ir uisetup/uisetup.sql


-- import the type specifying the types of users we have (this is an enum).
\ir ../libs/auth/data/user/types/all.sql
\ir ../libs/auth/data/user/user.sql

-- import our application models

-- Conversation
\ir conversation/types/all.sql
\ir conversation/conversation.sql


-- Message
\ir message/types/all.sql
\ir message/message.sql


-- Match
\ir match/types/all.sql
\ir match/match.sql


-- Hidden
\ir hidden/types/all.sql
\ir hidden/hidden.sql


-- Country
\ir country/types/all.sql
\ir country/country.sql


-- City
\ir city/types/all.sql
\ir city/city.sql


-- Userlocation
\ir userlocation/types/all.sql
\ir userlocation/userlocation.sql


-- Profile
\ir profile/types/all.sql
\ir profile/profile.sql


