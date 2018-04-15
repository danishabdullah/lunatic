\echo # Creating educational_modifier type for profile
create type educational_modifier as enum (
    'graduated from',
    'working on',
    'actively avoiding',
    'dropped out of'
);

insert into data.uisetup (name, details)
values
     ('educational_modifier', '{"options":{"actively avoiding":"Actively Avoiding","dropped out of":"Dropped Out Of","graduated from":"Graduated From","working on":"Working On"}}'::jsonb);


-- pretty jsonb
-- {
--     "options": {
--         "actively avoiding": "Actively Avoiding",
--         "dropped out of": "Dropped Out Of",
--         "graduated from": "Graduated From",
--         "working on": "Working On"
--     }
-- }