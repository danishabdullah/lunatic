-- define the view which is just selecting everything from the underlying table
-- although it looks like a user would see all the rows by looking just at this definition,
-- the RLS policy defined on the underlying table attached to the view owner (api)
-- will make sure only the appropriate roles will be reviled.
-- notice how for the api we don't expose the owner_id column even though it exists and is used
-- in the RLS policy, also, while out table name is "todo", singular, meant to symbolize a data type/model,
-- the view is named "profiles", plural, to match the rest conventions.
\echo # Creating profiles view
create or replace view profiles as
select 
    data.relay_id(t.*) as id, 
    id as row_id,                   	
    name,
    self_summary,         		
    gender,				 		
    show_as_masculine,		 	
    show_as_feminine,			
    show_as_other_gender, 		
    relationship_status,	 		
    languages,			 		
    dob, 				 		
    display_picture,		 		
    -- country,				 	
    educational_institution, 	
    educational_modifier,		
    is_student,			 		
    diet,				 		
    body_type,			 		
    smokes,				 		
    drinks,				 		
    uses_drugs,			 		
    zodiac,				 		
    zodiac_attitude,		 		
    children,			 		
    wants_children,		 		
    has_dog,				 		
    has_cat,				 		
    height_in_cm,		 		
    what_do_I_do,	   	 		
    i_am_good_at,		 		
    people_first_notice,	 		
    fave_books,			 		
    fave_movies,			 		
    fave_shows,			 		
    fave_music,			 		
    fave_food,			 		
    fave_blogs,			 		
    fave_comics,			 		
    fave_research_papers, 		
    what_do_I_think_about, 		
    ideal_use_of_freetime,		
    things_cant_do_without,  	
    most_private_shareables, 	
    message_me_if,				
    search_intention,			
    search_age_range_lowest,		
    search_age_range_highest,	
    search_genders,				
    search_single_only,			
    search_only_non_monogamous,
    -- References
    owner_id 			 		
from data.profile t;
alter view profiles owner to api; -- it is important to set the correct owner to the RLS policy kicks in