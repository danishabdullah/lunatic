\echo # Creating desire type for profile
create type desire as enum (
    'unsure',
    'yes',
    'no',
    'maybe later'
);

insert into data.uisetup (name, details)
values
     ('desire', '{"options":{"unsure":"Unsure","yes":"Yes","no":"No","maybe later":"Maybe later"}}'::jsonb);


-- pretty jsonb
-- {
--     "options"{
--          "unsure" : "Unsure",
--          "yes" : "Yes",
--          "no" : "No",
--          "maybe later" : "Maybe later"
--      }
-- }