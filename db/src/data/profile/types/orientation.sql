\echo # Creating orientation type for profile
create type orientation as enum (
    'straight', 'gay', 'bisexual', 'asexual', 'demisexual', 'heteroflexible', 'homoflexible', 'lesbian', 'pansexual', 'queer', 'questioning', 'sapiosexual'
);

insert into data.uisetup (name, details)
values
    ('orientation', '{"Asexual":"asexual","Bisexual":"bisexual","Demisexual":"demisexual","Gay":"gay","Heteroflexible":"heteroflexible","Homoflexible":"homoflexible","Lesbian":"lesbian","Pansexual":"pansexual","Queer":"queer","Questioning":"questioning","Sapiosexual":"sapiosexual","Straight":"straight"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Asexual": "asexual",
--        "Bisexual": "bisexual",
--        "Demisexual": "demisexual",
--        "Gay": "gay",
--        "Heteroflexible": "heteroflexible",
--        "Homoflexible": "homoflexible",
--        "Lesbian": "lesbian",
--        "Pansexual": "pansexual",
--        "Queer": "queer",
--        "Questioning": "questioning",
--        "Sapiosexual": "sapiosexual",
--        "Straight": "straight"
--    }

