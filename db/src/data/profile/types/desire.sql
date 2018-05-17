\echo # Creating desire type for profile
create type desire as enum (
    'unsure', 'yes', 'no', 'maybe later'
);

insert into data.uisetup (name, details)
values
    ('desire', '{"Maybe Later":"maybe later","No":"no","Unsure":"unsure","Yes":"yes"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Maybe Later": "maybe later",
--        "No": "no",
--        "Unsure": "unsure",
--        "Yes": "yes"
--    }

