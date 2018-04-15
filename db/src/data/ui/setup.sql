\echo # Creating uisetup table
create table uisetup (
	name             varchar(64) primary key,
    details          jsonb not null
);