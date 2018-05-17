\echo # Creating 'latitude' as a domain type
create domain latitude as double precision
check (value between -90.000000 and 90.000000)
;
