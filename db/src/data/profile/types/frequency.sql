\echo # Creating frequency type for profile
create type frequency as enum (
    'rarely', 'often', 'sometimes', 'never', 'socially', 'on special occasions'
);

insert into data.uisetup (name, details)
values
    ('frequency', '{"Never":"never","Often":"often","On Special Occasions":"on special occasions","Rarely":"rarely","Socially":"socially","Sometimes":"sometimes"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Never": "never",
--        "Often": "often",
--        "On Special Occasions": "on special occasions",
--        "Rarely": "rarely",
--        "Socially": "socially",
--        "Sometimes": "sometimes"
--    }

