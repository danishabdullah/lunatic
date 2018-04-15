\echo # Creating uisetup table
create table uisetup (
	name             char(64) primary key,
    details          jsonb not null
);