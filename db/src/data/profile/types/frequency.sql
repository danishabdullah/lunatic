\echo # Creating frequency type for profile
create type frequency as enum (
    'rarely', 
    'often', 
    'sometimes', 
    'never', 
    'socially', 
    'on special occasions'
    );

insert into data.uisetup (name, details)
values
    ('frequency', '{"options":{"rarely":"Rarely","often":"Often","sometimes":"Sometimes","never":"Never","socially":"Socially","on special occasions":"On special occasions"}}'::jsonb)

--
-- {
--     "options": {
--         "rarely" : "Rarely",
--         "often" : "Often",
--         "sometimes" : "Sometimes",
--         "never" : "Never",
--         "socially" : "Socially",
--         "on special occasions" : "On special occasions"
--     }
-- }