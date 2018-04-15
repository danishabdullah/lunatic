\echo # Creating looking_for type for profile
create type looking_for as enum (
    'activity partner',
    'friendship',
    'non-monogamous dating',
    'short-term dating',
    'long-term dating',
    'casual fun'
);

insert into data.uisetup (name, details)
values
     ('looking_for', '{"options":{"activity partner":"Activity Partner","casual fun":"Casual Fun","friend":"Friend","long-term dating":"Long-term Dating","non-monogamous dating":"Non-monogamous Dating","short-term dating":"Short-term Dating"}}'::jsonb);


-- pretty jsonb
-- {
--     "options": {
--         "activity partner": "Activity Partner",
--         "casual fun": "Casual Fun",
--         "friendship": "Friendship",
--         "long-term dating": "Long-term Dating",
--         "non-monogamous dating": "Non-monogamous Dating",
--         "short-term dating": "Short-term Dating"
--     }
-- }