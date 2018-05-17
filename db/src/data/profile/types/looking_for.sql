\echo # Creating looking_for type for profile
create type looking_for as enum (
    'activity partner', 'friendship', 'non-monogamous dating', 'short-term dating', 'long-term dating', 'casual fun'
);

insert into data.uisetup (name, details)
values
    ('looking_for', '{"Activity Partner":"activity partner","Casual Fun":"casual fun","Friendship":"friendship","Long-Term Dating":"long-term dating","Non-Monogamous Dating":"non-monogamous dating","Short-Term Dating":"short-term dating"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Activity Partner": "activity partner",
--        "Casual Fun": "casual fun",
--        "Friendship": "friendship",
--        "Long-Term Dating": "long-term dating",
--        "Non-Monogamous Dating": "non-monogamous dating",
--        "Short-Term Dating": "short-term dating"
--    }

