\echo # Creating user table
select settings.set('auth.data-schema', current_schema);
create table "user" (
	id                   		bigserial primary key,
	email                		char(256) not null unique,
	"password"           		char(1024) not null,
	facebook_id			    	char(128),
	facebook_access_token   	char(4096),
	forgotten_password_secret	char(256),
	email_blocked				boolean not null default false,
	known_spammer				boolean not null default false,		
	has_verified_email			boolean not null default false,
	"role"				 		user_role not null default settings.get('auth.default-role')::user_role,

	check (length(email) > 7)
	-- check (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$')
);

create trigger user_encrypt_pass_trigger
before insert or update on "user"
for each row
execute procedure auth.encrypt_pass();