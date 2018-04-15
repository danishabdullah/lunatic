\echo # Creating diet type for profile
create type diet as enum (
    'omnivore',
    'vegetarian',
    'pescatarian',
    'vegan',
    'carnivore',
    'halal',
    'kosher',
    'paleo',
    'keto',
    'gluten free',
    'pizza'
);

insert into data.uisetup (name, details)
values
     ('diet', '{"options":{"omnivore":"Omnivore","vegetarian":"Vegetarian","pescatarian":"Pescatarian","carnivore":"Carnivore","vegan":"Vegan","halal":"Halal","kosher":"Kosher","paleo":"Paleo","keto":"Keto","gluten free":"Gluten Free","pizza":"Pizza"}}'::jsonb);


-- pretty jsonb
-- {
--     "options": {
--         "omnivore": "Omnivore",
--         "vegetarian": "Vegetarian",
--         "pescatarian": "Pescatarian",
--         "carnivore": "Carnivore",
--         "vegan": "Vegan",
--         "halal": "Halal",
--         "kosher": "Kosher",
--         "paleo": "Paleo",
--         "keto": "Keto",
--         "gluten free": "Gluten Free",
--         "pizza": "Pizza"
--     }
-- }