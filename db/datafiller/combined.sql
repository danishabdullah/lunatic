-- define macros
-- df English: word=English.dict
-- df: size=10
-- df chen:int sub=scale rate=0.17
-- df name: chars='esaitnrulodcpmvqfbghjxyzwk' cgen=chen length=8 lenvar=3



-- make types

create type feedback_theme as enum (
    'indecent exposure', 'unfriendly', 'copy/paste', 'insulting', 'too long', 'did not read', 'not my type', 'too eager', 'not eager enough', 'not my humour', 'too incoherent', 'too silly', 'had not read my profile', 'misunderstood my profile', 'not in my area', 'other'
);

create type feedback_type as enum (
    'positive', 'negative', 'neutral'
);

create type attitude as enum (
    'totally into it', 'laughing about it', 'weirded out by it', 'dont care whatsoever about it', 'actively ignoring it', 'somewhat bothered by it', 'questioning it', 'at peace with it', 'rather disturbed by it', 'it is mostly a culture thing', 'preachy about it'
);

create type body_type as enum (
    'rather not say', 'thin', 'average', 'a little extra', 'curvy', 'fit', 'jacked', 'used up', 'full figured'
);

create type culture as enum (
    'none', 'some', 'lots'
);

create type desire as enum (
    'unsure', 'yes', 'no', 'maybe later'
);

create type diet as enum (
    'omnivore', 'vegetarian', 'pescatarian', 'vegan', 'carnivore', 'halal', 'kosher', 'paleo', 'keto', 'gluten free', 'pizza'
);

create type educational_modifier as enum (
    'graduated from', 'working on', 'actively avoiding', 'dropped out of'
);

create type educational_stage as enum (
    'high school', 'professional college', 'university', 'post grad', 'space camp', 'monster university', 'university of life'
);

create type frequency as enum (
    'rarely', 'often', 'sometimes', 'never', 'socially', 'on special occasions'
);

create type gender as enum (
    'man', 'woman', 'cis man', 'cis woman', 'agender', 'androgynous', 'bigender', 'genderfluid', 'genderqueer', 'gender nonconforming', 'hijra', 'intersex', 'non binary', 'pangender', 'transfeminine', 'transgender', 'transmasculine', 'transsexual', 'trans man', 'trans woman', 'two spirits', 'attack helicopter', 'other'
);

create type gender_type as enum (
    'masculine', 'feminine', 'both', 'other'
);

create type looking_for as enum (
    'activity partner', 'friendship', 'non-monogamous dating', 'short-term dating', 'long-term dating', 'casual fun'
);

create type orientation as enum (
    'straight', 'gay', 'bisexual', 'asexual', 'demisexual', 'heteroflexible', 'homoflexible', 'lesbian', 'pansexual', 'queer', 'questioning', 'sapiosexual'
);

create type relationship_status as enum (
    'single', 'seeing someone', 'married', 'open relationship', 'non-monogamous', 'it is complicated'
);


\echo # Creating spoken_language type for profile
create type spoken_language as enum (
    'english', 'afrikaans', 'albanian', 'arabic', 'armenian', 'basque', 'belarusian', 'bengali', 'breton', 'bulgarian', 'catalan', 'cebuano', 'chechen', 'chinese', 'chinese (cantonese)', 'chinese (mandarin)', 'c++', 'croatian', 'czech', 'danish', 'dutch', 'esperanto', 'estonian', 'finnish', 'french', 'frisian', 'georgian', 'german', 'greek', 'gujarati', 'ancient greek', 'hawaiian', 'hebrew', 'hindi', 'hungarian', 'icelandic', 'ilongo', 'indonesian', 'irish', 'italian', 'japanese', 'khmer', 'korean', 'latin', 'latvian', 'lisp', 'lithuanian', 'malay', 'maori', 'mongolian', 'norwegian', 'occitan', 'persian', 'polish', 'portuguese', 'punjabi', 'python', 'romanian', 'rotuman', 'russian', 'sanskrit', 'sardinian', 'serbian', 'sign language', 'slovak', 'slovenian', 'spanish', 'swahili', 'swedish', 'tagalog', 'tamil', 'thai', 'tibetan', 'turkish', 'ukrainian', 'urdu', 'vietnamese', 'welsh', 'yiddish', 'other'
);


create type zodiac as enum (
    'aquarius', 'aries', 'cancer', 'capricorn', 'gemini', 'leo', 'libra', 'pisces', 'saggitarius', 'scorpio', 'taurus', 'virgo', 'hell no'
);

create domain email as varchar(256)
check (length(value) > 6 and value ~* '(?:[a-z0-9!#$%&''*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])')
;

create type iso as enum (
    'ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh', 'er', 'es', 'et', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gb', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'xk', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'ss', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'st', 'sv', 'sx', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'um', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws', 'ye', 'yt', 'za', 'zm', 'zw'
);

create table uisetup ( -- df: nogen
    -- Columns
    name               varchar(64) primary key,
    details            jsonb not null,
    updated_at         timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at         timestamp with time zone not null default CURRENT_TIMESTAMP
    

);

create table country ( --df: nogen
    -- Columns
    iso                   iso primary key not null default 'de'::iso,
    iso3                  char(3) not null default 'deu'::char(3) unique,
    iso_numeric           smallint not null default 276 unique,
    name                  varchar(256) not null default 'germany'::varchar(256), -- df: use=name length=15 lenvar=9
    capital               varchar(256) not null default 'berlin'::varchar(256), -- df: use=name length=15 lenvar=9
    population            integer not null default 81802257,
    currency_code         char(3) not null default 'eur'::char(3),
    currency_name         varchar(50) not null default 'euro'::varchar(50),
    neighbours            char(2)[] default '{ch,pl,nl,dk,be,cz,lu,fr,at}'::char(2)[],
    updated_at            timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at            timestamp with time zone not null default CURRENT_TIMESTAMP,
    check (population between 920 and 2000000000)
);


create table city ( --df: nogen
    -- Columns
    id                                bigserial primary key not null,
    geoname_id                        integer not null default 2950159,
    name                              varchar(256) not null default 'berlin'::varchar(256), -- df: use=name length=15 lenvar=9
    ascii_name                        varchar(256) not null default 'berlin'::varchar(256), -- df: use=name length=15 lenvar=9
    alternate_names                   varchar(4096) not null default 'ber,beirlin,beirlín,berleno,berlien,berliin,berliini,berlijn,berlim,berlin,berline,berlini,berlino,berlyn,berlynas,berlëno,berlín,berlîn,berlīne,berolino,berolinum,birlinu,bèrlîn,estat de berlin,estat de berlín,bai lin,barlina,beleullin,berlini,berurin,bexrlin,brlyn,perlin,βερολίνο,берлин,берлін,бэрлін,բերլին,בערלין,ברלין,برلين,برلین,بېرلىن,ܒܪܠܝܢ,बर्लिन,বার্লিন,பெர்லின்,เบอร์ลิน,ბერლინი,ベルリン,柏林,베를린'::varchar(4096), -- df: text=English length=50 lenvar=20
    latitude                          double precision not null default 52.52437,
    longitude                         double precision not null default 13.41053,
    population                        integer not null default 3426354,
    timezone                          varchar(128) not null default 'europe/berlin'::varchar(128),
    geoname_modification_date         date not null default '2016-09-26'::date,
    updated_at                        timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at                        timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    country_iso                       iso references country(iso)  not null default 'de'::iso,
    
    -- Checks
    check (latitude >= -90.000000 and latitude <= 90.000000),
    check (longitude >= -180.000000 and longitude <= 180.000000)
);

create table user (
    -- Columns
    id                                bigserial primary key,
    email                             varchar(256) not null, -- df: pattern='(\w+((\.|-)?\w+)?)+@(gmail|hotmail|live|yahoo|outlook|fastmail)\.(com\.pk|com|co\.uk|de|fr|ca|in|au)'
    "password"                        varchar(72) not null, -- df: text=English length=2 lenvar=1
    has_verified_email                boolean not null default false,
    email_verification_code           uuid,
    "role"                            user_role not null default settings.get('auth.default-role')::user_role,
    facebook_id                       varchar(128), -- df: text=English length=50 lenvar=20
    facebook_access_token             varchar(4096), -- df: text=English length=50 lenvar=20
    forgotten_password_secret         varchar(256), -- df: text=English length=50 lenvar=20
    updated_at                        timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at                        timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    check (length("password") > 12)
);

create table conversation (
    -- Columns
    id                              bigserial primary key,
    success                         boolean not null default false,
    feedback                        varchar(1024), -- df: text=English length=50 lenvar=20
    feedback_type                   feedback_type,
    feedback_theme                  feedback_theme[10],
    feedback_received_at            timestamp with time zone,
    marked_as_spam                  boolean,
    marked_as_bot                   boolean,
    marked_as_fake                  boolean,
    marked_as_impersonation         boolean,
    updated_at                      timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at                      timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    origin_user_id                  bigint references user(id)  not null,
    target_user_id                  bigint references user(id)  not null,
    
    -- Checks
    check (length("feedback") > 100)
);


create table hidden (
    -- Columns
    id                  bigserial primary key,
    updated_at          timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at          timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    by_user             bigint references user(id)  not null,
    hidden_user         bigint references user(id)  not null
    
    -- Checks
    
);


\echo # Creating match table
create table match (
    -- Columns
    ids_string            varchar(39) primary key,
    left_liked            boolean not null default false,
    right_liked           boolean not null default false,
    updated_at            timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at            timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    left_user_id          bigint references user(id)  not null,
    right_user_id         bigint references user(id)  not null
    
    -- Checks
    
);


\echo # Creating message table
create table message (
    -- Columns
    id                      bigserial primary key,
    content                 varchar(2048), -- df: text=English length=50 lenvar=20
    updated_at              timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at              timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    conversation_id         bigserial references conversation(id)  not null,
    "from"                  bigint references user(id)  not null,
    "to"                    bigint references user(id)  not null,
    
    -- Checks
    check (length("content") > 10)
);


create table profile (
    -- Columns
    id                                   bigserial primary key,
    name                                 varchar(24) not null, -- df: use=name length=15 lenvar=9
    self_summary                         varchar(1024), -- df: text=English length=50 lenvar=20
    gender                               gender[5] not null,
    gender_type                          gender_type,
    relationship_status                  relationship_status not null default 'single'::relationship_status,
    speaks                               spoken_language[10] not null default '{english}'::spoken_language[10],
    dob                                  date not null, -- df: start=1970-01-01 end=2010-01-01
    display_picture                      varchar(1024) not null,
    album                                uuid,
    educational_stage                    educational_stage,
    educational_modifier                 educational_modifier,
    is_student                           boolean,
    diet                                 diet,
    body_type                            body_type,
    smokes                               frequency,
    drinks                               frequency,
    uses_drugs                           frequency,
    zodiac                               zodiac,
    zodiac_attitude                      attitude,
    children                             boolean,
    wants_children                       desire,
    has_dog                              boolean,
    has_cat                              boolean,
    height_in_cm                         integer,
    what_do_i_do                         varchar(1024), -- df: text=English length=50 lenvar=20
    i_am_good_at                         varchar(1024), -- df: text=English length=50 lenvar=20
    people_first_notice                  varchar(1024), -- df: text=English length=50 lenvar=20
    fave_books                           varchar(1024), -- df: text=English length=50 lenvar=20
    fave_movies                          varchar(1024), -- df: text=English length=50 lenvar=20
    fave_shows                           varchar(1024), -- df: text=English length=50 lenvar=20
    fave_music                           varchar(1024), -- df: text=English length=50 lenvar=20
    fave_food                            varchar(1024), -- df: text=English length=50 lenvar=20
    fave_blogs                           varchar(1024), -- df: text=English length=50 lenvar=20
    fave_comics                          varchar(1024), -- df: text=English length=50 lenvar=20
    fave_research_papers                 varchar(1024), -- df: text=English length=50 lenvar=20
    what_do_i_think_about                varchar(1024), -- df: text=English length=50 lenvar=20
    ideal_use_of_freetime                varchar(1024), -- df: text=English length=50 lenvar=20
    things_cant_do_without               varchar(1024), -- df: text=English length=50 lenvar=20
    most_private_shareables              varchar(1024), -- df: text=English length=50 lenvar=20
    message_me_if                        varchar(1024), -- df: text=English length=50 lenvar=20
    orientation                          orientation[5] not null default '{straight}'::orientation[5],
    show_me_to_non_straight_only         boolean not null default false,
    search_intention                     looking_for[6] not null,
    search_radius_in_km                  smallint not null default 25,
    search_age_range_lowest              smallint not null default 18,
    search_age_range_highest             smallint not null default 120,
    search_genders                       gender_type[4] not null,
    search_single_only                   boolean not null default false,
    search_only_non_monogamous           boolean not null default false,
    updated_at                           timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at                           timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    owner_id                             bigint references user(id)  not null default request.user_id() unique,
    country_iso                          iso references country(iso)  not null default 'de'::iso,
    city_id                              bigint references city(id)  not null,
    
    -- Checks
    check (length(name)>2),
    check (dob between '1905-01-01'::date  and current_date - interval '18 year'),
    check (75 >= height_in_cm and height_in_cm <= 250),
    check (3 >= search_radius_in_km and search_radius_in_km <= 500),
    check (18 >= search_age_range_lowest and search_age_range_lowest <= 120),
    check (18 >= search_age_range_highest and search_age_range_highest <= 120)
);


\echo # Creating userlocation table
create table userlocation (
    -- Columns
    id                 bigserial primary key,
    latitude           double precision,
    longitude          double precision,
    updated_at         timestamp with time zone not null default CURRENT_TIMESTAMP,
    created_at         timestamp with time zone not null default CURRENT_TIMESTAMP,
    
    -- References
    owner_id           bigint references user(id)  not null,
    
    -- Checks
    check (latitude >= -90.000000 and latitude <= 90.000000),
    check (longitude >= -180.000000 and longitude <= 180.000000)
);

