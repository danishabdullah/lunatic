\echo # Creating educational_stage type for profile
create type educational_stage as enum (
    'high school', 'professional college', 'university', 'post grad', 'space camp', 'monster university', 'university of life'
);

insert into data.uisetup (name, details)
values
    ('educational_stage', '{"High School":"high school","Monster University":"monster university","Post Grad":"post grad","Professional College":"professional college","Space Camp":"space camp","University":"university","University Of Life":"university of life"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "High School": "high school",
--        "Monster University": "monster university",
--        "Post Grad": "post grad",
--        "Professional College": "professional college",
--        "Space Camp": "space camp",
--        "University": "university",
--        "University Of Life": "university of life"
--    }

