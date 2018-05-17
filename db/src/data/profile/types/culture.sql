\echo # Creating culture type for profile
create type culture as enum (
    'none', 'some', 'lots'
);

insert into data.uisetup (name, details)
values
    ('culture', '{"Lots":"lots","None":"none","Some":"some"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Lots": "lots",
--        "None": "none",
--        "Some": "some"
--    }

