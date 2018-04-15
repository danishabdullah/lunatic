\echo # Creating user type to be used for the frontend exposure
select settings.set('auth.api-schema', current_schema);
create type "user" as (
    id                           bigint, 
    email                        char(256), 
	facebook_id			    	 char(128),
	facebook_access_token   	 char(4096),
	has_verified_email			 boolean,
	"role"				 		 char(64)
    );