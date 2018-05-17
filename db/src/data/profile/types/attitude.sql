\echo # Creating attitude type for profile
create type attitude as enum (
    'totally into it', 'laughing about it', 'weirded out by it', 'dont care whatsoever about it', 'actively ignoring it', 'somewhat bothered by it', 'questioning it', 'at peace with it', 'rather disturbed by it', 'it is mostly a culture thing', 'preachy about it'
);

insert into data.uisetup (name, details)
values
    ('attitude', '{"Actively Ignoring It":"actively ignoring it","At Peace With It":"at peace with it","Dont Care Whatsoever About It":"dont care whatsoever about it","It Is Mostly A Culture Thing":"it is mostly a culture thing","Laughing About It":"laughing about it","Preachy About It":"preachy about it","Questioning It":"questioning it","Rather Disturbed By It":"rather disturbed by it","Somewhat Bothered By It":"somewhat bothered by it","Totally Into It":"totally into it","Weirded Out By It":"weirded out by it"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Actively Ignoring It": "actively ignoring it",
--        "At Peace With It": "at peace with it",
--        "Dont Care Whatsoever About It": "dont care whatsoever about it",
--        "It Is Mostly A Culture Thing": "it is mostly a culture thing",
--        "Laughing About It": "laughing about it",
--        "Preachy About It": "preachy about it",
--        "Questioning It": "questioning it",
--        "Rather Disturbed By It": "rather disturbed by it",
--        "Somewhat Bothered By It": "somewhat bothered by it",
--        "Totally Into It": "totally into it",
--        "Weirded Out By It": "weirded out by it"
--    }

