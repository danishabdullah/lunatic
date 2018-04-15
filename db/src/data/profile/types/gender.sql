\echo # Creating gender type for profile
create type gender as enum (
    'man', 
    'woman', 
    'cis man', 
    'cis woman', 
    'agender',
    'androgynous',
    'bigender',
    'genderfluid',
    'genderqueer',
    'gender nonconforming',
    'hijra',
    'intersex',
    'non binary',
    'pangender',
    'transfeminine', 
    'transgender', 
    'transmasculine',
    'transsexual',
    'trans man',
    'trans woman',
    'two spirits',
    'other'
    );

insert into data.uisetup (name, details)
values
    ('gender', '{"options":{"man":"Man","woman":"Woman","cis man":"Cis Man","cis woman":"Cis Woman","agender":"Agender","androgynous":"Androgynous","bigender":"Bigender","genderfluid":"Genderfluid","genderqueer":"Genderqueer","gender nonconforming":"Gender Nonconforming","hijra":"Hijra","intersex":"Intersex","non binary":"Non Binary","pangender":"Pangender","transfeminine":"Transfeminine","transgender":"Transgender","transmasculine":"Transmasculine","transsexual":"Transsexual","trans man":"Trans Man","trans woman":"Trans Woman","two spirits":"Two Spirits","other":"Other"}}'::jsonb)

-- pretty jsonb
-- {
--     "options": {
--         "man": "Man" ,
--         "woman": "Woman" ,
--         "cis man": "Cis Man" ,
--         "cis woman": "Cis Woman" ,
--         "agender": "Agender",
--         "androgynous": "Androgynous",
--         "bigender": "Bigender",
--         "genderfluid": "Genderfluid",
--         "genderqueer": "Genderqueer",
--         "gender nonconforming": "Gender Nonconforming",
--         "hijra": "Hijra",
--         "intersex": "Intersex",
--         "non binary": "Non Binary",
--         "pangender": "Pangender",
--         "transfeminine": "Transfeminine" ,
--         "transgender": "Transgender" ,
--         "transmasculine": "Transmasculine",
--         "transsexual": "Transsexual",
--         "trans man": "Trans Man",
--         "trans woman": "Trans Woman",
--         "two spirits": "Two Spirits",
--         "other": "Other"
--     }  
-- }