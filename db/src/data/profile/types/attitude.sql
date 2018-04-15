\echo # Creating attitude type for profile
create type attitude as enum (
    'totally into it', 
    'laughing about it', 
    'weirded out by it', 
    'dont care whatsoever about it',
    'actively ignoring it',
    'somewhat bothered by it',
    'questioning it',
    'at peace with it',
    'rather disturbed by it',
    'it''s mostly a culture thing',
    'preachy about it'
);

insert into data.uisetup (name, details)
values
    ('attitude', '{"options":{"totally into it":"Totally into it","laughing about it":"Laughing about it","weirded out by it":"Weirded out by it","don''t care whatsoever about it":"Don''t care whatsoever about it","actively ignoring it":"Actively ignoring it","somewhat bothered by it":"Somewhat bothered by it","questioning it":"Questioning it","at peace with it":"At peace with it","rather disturbed by it":"Rather disturbed by it","it''s mostly a culture thing":"It''s mostly a culture thing","preachy about it":"Preachy about it"}}'::jsonb)
    ;

-- prettified json structure is as follows
-- {
--     "options": {
--         "totally into it": "Totally into it",
--         "laughing about it": "Laughing about it",
--         "weirded out by it": "Weirded out by it",
--         "don''t care whatsoever about it": "Don''t care whatsoever about it",
--         "actively ignoring it": "Actively ignoring it",
--         "somewhat bothered by it": "Somewhat bothered by it",
--         "questioning it": "Questioning it",
--         "at peace with it": "At peace with it",
--         "rather disturbed by it": "Rather disturbed by it",
--         "it''s mostly a culture thing": "It''s mostly a culture thing",
--         "preachy about it": "Preachy about it"
--     }
-- }