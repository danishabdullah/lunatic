\echo # Creating relationship_status type for profile
create type relationship_status as enum (
    'single', 'seeing someone', 'married', 'open relationship', 'non-monogamous', 'it is complicated'
);

insert into data.uisetup (name, details)
values
    ('relationship_status', '{"It Is Complicated":"it is complicated","Married":"married","Non-Monogamous":"non-monogamous","Open Relationship":"open relationship","Seeing Someone":"seeing someone","Single":"single"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "It Is Complicated": "it is complicated",
--        "Married": "married",
--        "Non-Monogamous": "non-monogamous",
--        "Open Relationship": "open relationship",
--        "Seeing Someone": "seeing someone",
--        "Single": "single"
--    }

