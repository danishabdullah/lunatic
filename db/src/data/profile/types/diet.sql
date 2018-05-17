\echo # Creating diet type for profile
create type diet as enum (
    'omnivore', 'vegetarian', 'pescatarian', 'vegan', 'carnivore', 'halal', 'kosher', 'paleo', 'keto', 'gluten free', 'pizza'
);

insert into data.uisetup (name, details)
values
    ('diet', '{"Carnivore":"carnivore","Gluten Free":"gluten free","Halal":"halal","Keto":"keto","Kosher":"kosher","Omnivore":"omnivore","Paleo":"paleo","Pescatarian":"pescatarian","Pizza":"pizza","Vegan":"vegan","Vegetarian":"vegetarian"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Carnivore": "carnivore",
--        "Gluten Free": "gluten free",
--        "Halal": "halal",
--        "Keto": "keto",
--        "Kosher": "kosher",
--        "Omnivore": "omnivore",
--        "Paleo": "paleo",
--        "Pescatarian": "pescatarian",
--        "Pizza": "pizza",
--        "Vegan": "vegan",
--        "Vegetarian": "vegetarian"
--    }

