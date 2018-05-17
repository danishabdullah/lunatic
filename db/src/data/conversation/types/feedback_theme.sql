\echo # Creating feedback_theme type for conversation
create type feedback_theme as enum (
    'indecent exposure', 'unfriendly', 'copy/paste', 'insulting', 'too long', 'did not read', 'not my type', 'too eager', 'not eager enough', 'not my humour', 'too incoherent', 'too silly', 'had not read my profile', 'misunderstood my profile', 'not in my area', 'other'
);

insert into data.uisetup (name, details)
values
    ('feedback_theme', '{"Copy/Paste":"copy/paste","Did Not Read":"did not read","Had Not Read My Profile":"had not read my profile","Indecent Exposure":"indecent exposure","Insulting":"insulting","Misunderstood My Profile":"misunderstood my profile","Not Eager Enough":"not eager enough","Not In My Area":"not in my area","Not My Humour":"not my humour","Not My Type":"not my type","Other":"other","Too Eager":"too eager","Too Incoherent":"too incoherent","Too Long":"too long","Too Silly":"too silly","Unfriendly":"unfriendly"}'::jsonb)
    ;

-- prettified json structure is as follows
--    {
--        "Copy/Paste": "copy/paste",
--        "Did Not Read": "did not read",
--        "Had Not Read My Profile": "had not read my profile",
--        "Indecent Exposure": "indecent exposure",
--        "Insulting": "insulting",
--        "Misunderstood My Profile": "misunderstood my profile",
--        "Not Eager Enough": "not eager enough",
--        "Not In My Area": "not in my area",
--        "Not My Humour": "not my humour",
--        "Not My Type": "not my type",
--        "Other": "other",
--        "Too Eager": "too eager",
--        "Too Incoherent": "too incoherent",
--        "Too Long": "too long",
--        "Too Silly": "too silly",
--        "Unfriendly": "unfriendly"
--    }

