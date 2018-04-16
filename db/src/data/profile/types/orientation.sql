\echo # Creating orientation type for profile
create type orientation as enum (
    'straight', 'gay', 'bisexual', 'asexual', 'demisexual', 'heteroflexible', 'homoflexible', 'lesbian', 'pansexual', 'queer', 'questioning', 'sapiosexual'
);

insert into data.uisetup (name, details)
values
    ('orientation', '{"options":{"straight":"Straight","gay":"Gay","bisexual":"Bisexual","asexual":"Asexual","demisexual":"Demisexual","heteroflexible":"Heteroflexible","homoflexible":"Homoflexible","lesbian":"Lesbian","pansexual":"Pansexual","queer":"Queer","questioning":"Questioning","sapiosexual":"Sapiosexual"}}'::jsonb);


--
-- {
--     "options": {
--         "straight": "Straight",
--         "gay": "Gay",
--         "bisexual": "Bisexual",
--         "asexual": "Asexual",
--         "demisexual": "Demisexual",
--         "heteroflexible": "Heteroflexible",
--         "homoflexible": "Homoflexible",
--         "lesbian": "Lesbian",
--         "pansexual": "Pansexual",
--         "queer": "Queer",
--         "questioning": "Questioning",
--         "sapiosexual": "Sapiosexual"
--     }
-- }
