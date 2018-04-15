\echo # Creating zodiac type for profile
create type zodiac as enum (
    'aquarius', 
    'aries', 
    'cancer', 
    'capricorn', 
    'gemini', 
    'leo', 
    'libra', 
    'pisces', 
    'saggitarius', 
    'scorpio', 
    'taurus', 
    'virgo', 
    'hell no'
);

insert into data.uisetup (name, details)
values
    ('zodiac', '{"options":{"aquarius":"Aquarius","aries":"Aries","cancer":"Cancer","capricorn":"Capricorn","gemini":"Gemini","leo":"Leo","libra":"Libra","pisces":"Pisces","saggitarius":"Saggitarius","scorpio":"Scorpio","taurus":"Taurus","virgo":"Virgo", "hell no":"Hell No"}}'::jsonb);


--
-- {
--     "options": {
--         "aquarius": "Aquarius",
--         "aries": "Aries",
--         "cancer": "Cancer",
--         "capricorn": "Capricorn",
--         "gemini": "Gemini",
--         "leo": "Leo",
--         "libra": "Libra",
--         "pisces": "Pisces",
--         "saggitarius": "Saggitarius",
--         "scorpio": "Scorpio",
--         "taurus": "Taurus",
--         "virgo": "Virgo",
--         "hell no": "Hell No"
--     }
-- }