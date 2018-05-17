\echo # Creating 'longitude' as a domain type
create domain longitude as double precision
check (value between -180.000000 and 180.000000)
;
