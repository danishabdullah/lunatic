\echo # Creating feedback_type type for conversation
create type feedback_type as enum (
    'positive', 'negative', 'neutral'
);

insert into data.uisetup (name, details)
values
    ('feedback_type', '{"Negative":"negative","Neutral":"neutral","Positive":"positive"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Negative": "negative",
--        "Neutral": "neutral",
--        "Positive": "positive"
--    }

