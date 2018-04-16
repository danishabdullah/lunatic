\echo # Creating educational_stage type for profile
create type educational_stage as enum (
    'high school',
    'professional college',
    'university',
    'post grad',
    'space camp',
    'monster university',
    'university of life'
);

insert into data.uisetup (name, details)
values
     ('educational_stage', '{"options":{"high school":"High School","monster university":"Monster University","post grad":"Post Grad","professional college":"Professional College","space camp":"Space Camp","university":"University","university of life":"University Of Life"}}'::jsonb);


-- pretty jsonb
-- {
--     "options": {
--         "high school": "High School",
--         "monster university": "Monster University",
--         "post grad": "Post Grad",
--         "professional college": "Professional College",
--         "space camp": "Space Camp",
--         "university": "University",
--         "university of life": "University Of Life"
--     }
-- }