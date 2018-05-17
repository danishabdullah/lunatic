\echo # Creating gender type for profile
create type gender as enum (
    'man', 'woman', 'cis man', 'cis woman', 'agender', 'androgynous', 'bigender', 'genderfluid', 'genderqueer', 'gender nonconforming', 'hijra', 'intersex', 'non binary', 'pangender', 'transfeminine', 'transgender', 'transmasculine', 'transsexual', 'trans man', 'trans woman', 'two spirits', 'attack helicopter', 'other'
);

insert into data.uisetup (name, details)
values
    ('gender', '{"Agender":"agender","Androgynous":"androgynous","Attack Helicopter":"attack helicopter","Bigender":"bigender","Cis Man":"cis man","Cis Woman":"cis woman","Gender Nonconforming":"gender nonconforming","Genderfluid":"genderfluid","Genderqueer":"genderqueer","Hijra":"hijra","Intersex":"intersex","Man":"man","Non Binary":"non binary","Other":"other","Pangender":"pangender","Trans Man":"trans man","Trans Woman":"trans woman","Transfeminine":"transfeminine","Transgender":"transgender","Transmasculine":"transmasculine","Transsexual":"transsexual","Two Spirits":"two spirits","Woman":"woman"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Agender": "agender",
--        "Androgynous": "androgynous",
--        "Attack Helicopter": "attack helicopter",
--        "Bigender": "bigender",
--        "Cis Man": "cis man",
--        "Cis Woman": "cis woman",
--        "Gender Nonconforming": "gender nonconforming",
--        "Genderfluid": "genderfluid",
--        "Genderqueer": "genderqueer",
--        "Hijra": "hijra",
--        "Intersex": "intersex",
--        "Man": "man",
--        "Non Binary": "non binary",
--        "Other": "other",
--        "Pangender": "pangender",
--        "Trans Man": "trans man",
--        "Trans Woman": "trans woman",
--        "Transfeminine": "transfeminine",
--        "Transgender": "transgender",
--        "Transmasculine": "transmasculine",
--        "Transsexual": "transsexual",
--        "Two Spirits": "two spirits",
--        "Woman": "woman"
--    }

