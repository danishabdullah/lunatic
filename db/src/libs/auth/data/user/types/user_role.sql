\echo # Creating user_role type for user
create type user_role as enum (
    'webuser', 'admin', 'shadow-banned'
);

insert into data.uisetup (name, details)
values
    ('user_role', '{"Admin":"admin","Shadow-Banned":"shadow-banned","Webuser":"webuser"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Admin": "admin",
--        "Shadow-Banned": "shadow-banned",
--        "Webuser": "webuser"
--    }

