select settings.set('auth.data-schema', current_schema);
create table "user" (
	id                   serial primary key,
	name                 char(128) not null,
	email                char(256) not null unique,
	"password"           char(1024) not null,
	self_summary         char(1024) not null,
	gender				 user_gender not null,
	relationship_status	 user_relationship not null DEFAULT 'single',
	languages			 user_language[] not null default ARRAY['english']:user_language,
	dob 				 date not null,
	display_picture		 text,
	smokes				 user_frequency,
	drinks				 user_frequency,
	drugs				 user_frequency,
	zodiac				 user_zodiac,
	zodiac_attitude		 user_attitude,
	children			 user_desire,
	height_in_cm		 integer,
	life_work			 char(1024),
	good_at				 char(1024),
	first_note			 char(1024),
	fave_books			 char(1024),
	fave_movies			 char(1024),
	fave_shows			 char(1024),
	fave_music			 char(1024),
	fave_food			 char(1024),
	fave_blogs			 char(1024),
	fave_comics			 char(1024),
	fave_research_papers char(1024),
	"role"				 user_role not null default settings.get('auth.default-role')::user_role,

	check (length(name)>2),
	check ('01-01-1905'::date < dob < CURRENT_DATE - interval '18 year')
	check (100< height < 250)
	check (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$')
);

create trigger user_encrypt_pass_trigger
before insert or update on "user"
for each row
execute procedure auth.encrypt_pass();
