\echo # Creating user_role type for user
create type user_role as enum (
    'webuser',
    'admin',
    'shadow-banned');
