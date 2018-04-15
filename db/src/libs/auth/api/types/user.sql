\echo # Creating user type to be used for the frontend exposure
select settings.set('auth.api-schema', current_schema);
create type "user" as (
    id                           bigint, 
    email                        varchar(256), 
	facebook_id			    	 varchar(128),
	facebook_access_token   	 varchar(4096),
	has_verified_email			 boolean,
	"role"				 		 varchar(64)
    );