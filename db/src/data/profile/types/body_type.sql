\echo # Creating body_type type for profile
create type body_type as enum (
    'rather not say', 'thin', 'average', 'a little extra', 'curvy', 'fit', 'jacked', 'used up', 'full figured'
);

insert into data.uisetup (name, details)
values
    ('body_type', '{"A Little Extra":"a little extra","Average":"average","Curvy":"curvy","Fit":"fit","Full Figured":"full figured","Jacked":"jacked","Rather Not Say":"rather not say","Thin":"thin","Used Up":"used up"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "A Little Extra": "a little extra",
--        "Average": "average",
--        "Curvy": "curvy",
--        "Fit": "fit",
--        "Full Figured": "full figured",
--        "Jacked": "jacked",
--        "Rather Not Say": "rather not say",
--        "Thin": "thin",
--        "Used Up": "used up"
--    }

