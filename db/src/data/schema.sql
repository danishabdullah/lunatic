drop schema if exists data cascade;
create schema data;
set search_path = data, public;

-- import the type specifying the types of users we have (this is an enum).
-- you most certainly will have to redefine this type for your application
\ir ../libs/auth/data/user/types/user_role.sql

-- import the default table definition for the user model used by the auth lib
-- you can choose to define the "user" table yourself if you need additional columns
\ir ../libs/auth/data/user/user.sql

-- import our application models

-- ui setup
\ir ./ui/setup.sql
\ir ./relay/uisetup_id.sql

-- todo
\ir ./todo/todo.sql
\ir ./relay/todo_id.sql

-- profile
\ir ./profile/types/all.sql
\ir ./profile/profile.sql
\ir ./relay/profile_id.sql