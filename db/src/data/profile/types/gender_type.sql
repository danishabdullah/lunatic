\echo # Creating gender_type type for profile
create type gender_type as enum (
    'masculine', 'feminine', 'both', 'other'
);

insert into data.uisetup (name, details)
values
    ('gender_type', '{"Both":"both","Feminine":"feminine","Masculine":"masculine","Other":"other"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Both": "both",
--        "Feminine": "feminine",
--        "Masculine": "masculine",
--        "Other": "other"
--    }

