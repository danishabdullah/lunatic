\echo # Creating zodiac type for profile
create type zodiac as enum (
    'aquarius', 'aries', 'cancer', 'capricorn', 'gemini', 'leo', 'libra', 'pisces', 'saggitarius', 'scorpio', 'taurus', 'virgo', 'hell no'
);

insert into data.uisetup (name, details)
values
    ('zodiac', '{"Aquarius":"aquarius","Aries":"aries","Cancer":"cancer","Capricorn":"capricorn","Gemini":"gemini","Hell No":"hell no","Leo":"leo","Libra":"libra","Pisces":"pisces","Saggitarius":"saggitarius","Scorpio":"scorpio","Taurus":"taurus","Virgo":"virgo"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Aquarius": "aquarius",
--        "Aries": "aries",
--        "Cancer": "cancer",
--        "Capricorn": "capricorn",
--        "Gemini": "gemini",
--        "Hell No": "hell no",
--        "Leo": "leo",
--        "Libra": "libra",
--        "Pisces": "pisces",
--        "Saggitarius": "saggitarius",
--        "Scorpio": "scorpio",
--        "Taurus": "taurus",
--        "Virgo": "virgo"
--    }

