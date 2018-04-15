\echo # Creating profile table
create table "profile" (
	-- Columns
	id                   			bigserial primary key,
	name                 			char(128) not null,
	self_summary         			char(1024) not null,
	gender				 			gender not null,
	show_as_masculine		 		boolean,
	show_as_feminine				boolean,
	show_as_other_gender 			boolean,
	relationship_status	 			relationship_status not null DEFAULT 'single',
	languages			 			spoken_language[10] not null default ARRAY['english']::spoken_language[],
	dob 				 			date not null,
	display_picture		 			char(1024) not null,
	-- country				 			country not null default 'germany',
	educational_institution 		educational_institution,
	educational_modifier			educational_modifier,
	is_student			 			boolean,	 
	diet				 			diet,
	body_type			 			body_type,
	smokes				 			frequency,
	drinks				 			frequency,
	uses_drugs			 			frequency,
	zodiac				 			zodiac,
	zodiac_attitude		 			attitude,
	children			 			boolean,
	wants_children		 			desire,
	has_dog				 			boolean,
	has_cat				 			boolean,
	height_in_cm		 			integer,
	what_do_I_do	   	 			char(1024),
	i_am_good_at		 			char(1024),
	people_first_notice	 			char(1024),
	fave_books			 			char(1024),
	fave_movies			 			char(1024),
	fave_shows			 			char(1024),
	fave_music			 			char(1024),
	fave_food			 			char(1024),
	fave_blogs			 			char(1024),
	fave_comics			 			char(1024),
	fave_research_papers 			char(1024),
	what_do_I_think_about 			char(1024),
	ideal_use_of_freetime			char(1024),
	things_cant_do_without  		char(1024),
	most_private_shareables 		char(1024),
	message_me_if					char(1024),
	search_intention				looking_for[6] not null,
	search_age_range_lowest			smallint not null default 18,
	search_age_range_highest		smallint not null default 120,
	search_genders					gender_type[4] not null,
	search_single_only				boolean not null default false,
	search_only_non_monogamous		boolean not null default false,

	-- References
	owner_id 			 			bigint references data."user"(id) default request.user_id()
	-- Checks
	check (length(name)>2),
	check (dob BETWEEN '1905-01-01'::date  AND CURRENT_DATE - interval '18 year'),
	check (75 <= height_in_cm AND height_in_cm <= 250),
	check (18 <= search_age_range_lowest AND search_age_range_lowest <= 120),
	check (18 <= search_age_range_highest AND search_age_range_highest <= 120)
);

create trigger send_change_event
after insert or update or delete on profile
for each row execute procedure rabbitmq.on_row_change('{"include":["id","name"]}');
