\echo # Creating user type to be used for the frontend exposure
select settings.set('auth.api-schema', current_schema);
create type "user" as (
    id                           bigint, 
    email                        varchar(256),
    "role"				 		 varchar(64)
    );
