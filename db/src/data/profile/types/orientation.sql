\echo # Creating orientation type for profile
create type orientation as enum (
    'Straight', 'Gay', 'Bisexual', 'Asexual', 'Demisexual', 'Heteroflexible', 'Homoflexible', 'Lesbian', 'Pansexual', 'Queer', 'Questioning', 'Sapiosexual'
);

insert into data.uisetup (name, details)
values
    ('orientation', '{"options":{"Straight":"Straight","Gay":"Gay","Bisexual":"Bisexual","Asexual":"Asexual","Demisexual":"Demisexual","Heteroflexible":"Heteroflexible","Homoflexible":"Homoflexible","Lesbian":"Lesbian","Pansexual":"Pansexual","Queer":"Queer","Questioning":"Questioning","Sapiosexual":"Sapiosexual"}}'::jsonb);


--
-- {
--     "options": {
--         "Straight": "Straight",
--         "Gay": "Gay",
--         "Bisexual": "Bisexual",
--         "Asexual": "Asexual",
--         "Demisexual": "Demisexual",
--         "Heteroflexible": "Heteroflexible",
--         "Homoflexible": "Homoflexible",
--         "Lesbian": "Lesbian",
--         "Pansexual": "Pansexual",
--         "Queer": "Queer",
--         "Questioning": "Questioning",
--         "Sapiosexual": "Sapiosexual"
--     }
-- }
