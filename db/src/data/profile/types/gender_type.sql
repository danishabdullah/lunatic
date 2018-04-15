\echo # Creating gender_type type for profile
create type gender_type as enum (
    'masculine',
    'feminine',
    'both',
    'other'
);

insert into data.uisetup (name, details)
values
     ('gender_type', '{"options":{"unsure":"Unsure","yes":"Yes","no":"No","maybe later":"Maybe later"}}'::jsonb);


-- pretty jsonb
-- {
--     "options"{
--          "unsure" : "Unsure",
--          "yes" : "Yes",
--          "no" : "No",
--          "maybe later" : "Maybe later"
--      }
-- }