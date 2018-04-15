\echo # Creating body_type type for profile
create type body_type as enum (
    'rather not say',
    'thin',
    'average',
    'a little extra',
    'curvy',
    'fit',
    'jacked',
    'used up',
    'full figured'
);

insert into data.uisetup (name, details)
values
     ('body_type', '{"options":{"rather not say":"Rather Not Say","thin":"Thin","average":"Average","a little extra":"A Little Extra","curvy":"Curvy","fit":"Fit","jacked":"Jacked","used up":"Used Up","full figured":"Full Figured"}}'::jsonb);


-- pretty jsonb
-- {
--     "options": {
--         "rather not say": "Rather Not Say",
--         "thin": "Thin",
--         "average": "Average",
--         "a little extra": "A Little Extra",
--         "curvy": "Curvy",
--         "fit": "Fit",
--         "jacked": "Jacked",
--         "used up": "Used Up",
--         "full figured": "Full Figured"
--     }
-- }