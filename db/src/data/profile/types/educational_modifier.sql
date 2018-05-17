\echo # Creating educational_modifier type for profile
create type educational_modifier as enum (
    'graduated from', 'working on', 'actively avoiding', 'dropped out of'
);

insert into data.uisetup (name, details)
values
    ('educational_modifier', '{"Actively Avoiding":"actively avoiding","Dropped Out Of":"dropped out of","Graduated From":"graduated from","Working On":"working on"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Actively Avoiding": "actively avoiding",
--        "Dropped Out Of": "dropped out of",
--        "Graduated From": "graduated from",
--        "Working On": "working on"
--    }

