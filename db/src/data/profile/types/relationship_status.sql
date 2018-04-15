\echo # Creating relationship_status type for profile
create type relationship_status as enum (
    'single', 
    'seeing someone', 
    'married', 
    'open relationship', 
    'non-monogamous', 
    'it''s complicated'
    );

insert into data.uisetup (name, details)
values
    ('relationship_status', '{"options":{"single":"Single","seeing someone":"Seeing Someone","married":"Married","open relationship":"Open Relationship","non-monogamous":"Non-monogamous","it''s complicated":"It''s Complicated"}}'::json)

--
-- {
--     "options": {
--         "single": "Single",
--         "seeing someone": "Seeing Someone",
--         "married": "Married",
--         "open relationship": "Open Relationship",
--         "non-monogamous": "Non-monogamous",
--         "it's complicated": "It''s Complicated"
--     }
-- }