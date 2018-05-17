\echo # Creating conversations view
set search_path = api, public;
create or replace view conversations as
select 
    
    id as id,
    success,
    feedback,
    feedback_type,
    feedback_theme,
    feedback_received_at,
    marked_as_spam,
    marked_as_bot,
    marked_as_fake,
    marked_as_impersonation,
    updated_at,
    created_at,
    origin_user_id,
    target_user_id
from data.conversation t;
alter view conversations owner to api; -- it is important to set the correct owner to the RLS policy kicks in
