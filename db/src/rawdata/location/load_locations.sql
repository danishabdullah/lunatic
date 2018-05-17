\echo # filling table country
-- tsv order
-- iso,iso3,iso_numeric,name,capital,population,currency_code,currency_name,neighbours
set search_path = data, public;

COPY country (iso,iso3,iso_numeric,name,capital,population,currency_code,currency_name,neighbours)
FROM '/docker-entrypoint-initdb.d/rawdata/location/countries.tsv' (FORMAT 'csv', ENCODING 'utf-8',  DELIMITER '	', FREEZE ON, NULL 'NULL');


\echo # filling table cities
-- tsv order
-- geoname_id,name,ascii_name,alternate_names,latitude,longitude,country_code,population,timezone,geoname_modification_date
COPY city (geoname_id,name,ascii_name,alternate_names,latitude,longitude,country_iso,population,timezone,geoname_modification_date)
FROM '/docker-entrypoint-initdb.d/rawdata/location/cities1000-clean.tsv' (FORMAT 'csv', ENCODING 'utf-8',  DELIMITER '	', FREEZE ON, NULL 'NULL', QUOTE '"');