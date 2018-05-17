\echo # Creating city table
create table "city"(
    -- Columns
    id                                bigserial primary key not null,
    geoname_id                        integer not null default 2950159,
    name                              varchar(256) not null default 'berlin'::varchar(256),
    ascii_name                        varchar(256) default 'berlin'::varchar(256),
    alternate_names                   varchar(4096) default 'ber,beirlin,beirlín,berleno,berlien,berliin,berliini,berlijn,berlim,berlin,berline,berlini,berlino,berlyn,berlynas,berlëno,berlín,berlîn,berlīne,berolino,berolinum,birlinu,bèrlîn,estat de berlin,estat de berlín,bai lin,barlina,beleullin,berlini,berurin,bexrlin,brlyn,perlin,βερολίνο,берлин,берлін,бэрлін,բերլին,בערלין,ברלין,برلين,برلین,بېرلىن,ܒܪܠܝܢ,बर्लिन,বার্লিন,பெர்லின்,เบอร์ลิน,ბერლინი,ベルリン,柏林,베를린'::varchar(4096),
    latitude                          latitude not null default 52.52437,
    longitude                         longitude not null default 13.41053,
    population                        integer not null default 3426354,
    timezone                          varchar(128) not null default 'europe/berlin'::varchar(128),
    geoname_modification_date         date not null default '2016-09-26'::date,
    updated_at                        timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at                        timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    country_iso                       iso references "country"("iso")  not null default 'de'::iso
    
    -- Checks
    
);



create trigger updated_at_mdt
    before update on "city"
    for each row
    execute procedure moddatetime (updated_at);

