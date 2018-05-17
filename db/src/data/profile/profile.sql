\echo # Creating profile table
create table "profile"(
    -- Columns
    id                                   bigserial primary key,
    name                                 varchar(24) not null,
    self_summary                         varchar(1024),
    gender                               gender[5] not null,
    gender_type                          gender_type,
    relationship_status                  relationship_status not null default 'single'::relationship_status,
    speaks                               spoken_language[10] not null default '{english}'::spoken_language[10],
    dob                                  date not null,
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
    what_do_i_do                         varchar(1024),
    i_am_good_at                         varchar(1024),
    people_first_notice                  varchar(1024),
    fave_books                           varchar(1024),
    fave_movies                          varchar(1024),
    fave_shows                           varchar(1024),
    fave_music                           varchar(1024),
    fave_food                            varchar(1024),
    fave_blogs                           varchar(1024),
    fave_comics                          varchar(1024),
    fave_research_papers                 varchar(1024),
    what_do_i_think_about                varchar(1024),
    ideal_use_of_freetime                varchar(1024),
    things_cant_do_without               varchar(1024),
    most_private_shareables              varchar(1024),
    message_me_if                        varchar(1024),
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
    owner_id                             bigint references "user"("id")  not null default request.user_id() unique,
    country_iso                          iso references "country"("iso")  not null default 'de'::iso,
    city_id                              bigint references "city"("id")  not null,
    
    -- Checks
    check (length(name)>2),
    check (dob between '1905-01-01'::date  and current_date - interval '18 year'),
    check (75 >= height_in_cm and height_in_cm <= 250),
    check (3 >= search_radius_in_km and search_radius_in_km <= 500),
    check (18 >= search_age_range_lowest and search_age_range_lowest <= 120),
    check (18 >= search_age_range_highest and search_age_range_highest <= 120)
);


-- attach the trigger to send events to rabbitmq
-- there is a 8000 bytes hard limit on the message payload size (PG NOTIFY) so it's better not to send data that is not used
-- on_row_change call can take the following forms
-- on_row_change() - send all columns
-- on_row_change('{"include":["id"]}'::json) - send only the listed columns
-- on_row_change('{"exclude":["bigcolumn"]}'::json) - exclude listed columns from the payload

create trigger send_change_event
    after insert or update or delete on "profile"
    for each row execute procedure rabbitmq.on_row_change('{"include":["id","name","owner_id"]}');

create trigger updated_at_mdt
    before update on "profile"
    for each row
    execute procedure moddatetime (updated_at);

