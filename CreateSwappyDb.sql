create table swappydb.long_link
(
    ll_id            bigint auto_increment
        primary key,
    ll_long_url      varchar(2048) not null,
    ll_creation_time datetime      not null
);

create table swappydb.rules_definition
(
    rd_id   smallint auto_increment
        primary key,
    rd_name varchar(128) not null,
    constraint processing_rules_rule_uindex
        unique (rd_name)
);

create table swappydb.short_link
(
    sl_id            bigint auto_increment
        primary key,
    sl_short_url     varchar(200) not null,
    sl_creation_time datetime     not null,
    constraint short_link_short_url_uindex
        unique (sl_short_url)
);

create table swappydb.route
(
    ro_id           bigint auto_increment
        primary key,
    ro_short_url_id bigint not null,
    ro_long_url_id  bigint not null,
    constraint route_long_link_id_fk
        foreign key (ro_long_url_id) references swappydb.long_link (ll_id),
    constraint route_short_link_id_fk
        foreign key (ro_short_url_id) references swappydb.short_link (sl_id)
);

create table swappydb.rules
(
    r_id           bigint auto_increment
        primary key,
    r_short_url_id bigint        not null,
    r_param        varchar(2048) null,
    r_is_active    tinyint(1)    not null,
    r_rule_id      smallint      not null,
    constraint rules_rules_definition_rd_id_fk
        foreign key (r_rule_id) references swappydb.rules_definition (rd_id),
    constraint rules_short_link_sl_id_fk
        foreign key (r_short_url_id) references swappydb.short_link (sl_id)
);

create table swappydb.stats
(
    s_id            bigint auto_increment
        primary key,
    s_route_id      bigint        not null,
    s_date_time     datetime      not null,
    s_url_referrer  varchar(2048) null,
    s_platform      varchar(255)  null,
    s_screen_width  mediumint     null,
    s_screen_height mediumint     null,
    s_ip_address    varchar(39)   null,
    constraint stats_route_ro_id_fk
        foreign key (s_route_id) references swappydb.route (ro_id)
);

create table swappydb.user
(
    u_id    int auto_increment
        primary key,
    u_login varchar(40)  not null,
    u_email varchar(256) not null,
    u_hash  varchar(60)  not null,
    constraint user_email_uindex
        unique (u_email),
    constraint user_login_uindex
        unique (u_login)
);

create table swappydb.users_links
(
    ul_id           bigint auto_increment
        primary key,
    ul_user_id      int    not null,
    ul_short_url_id bigint not null,
    constraint users_links_short_link_id_fk
        foreign key (ul_short_url_id) references swappydb.short_link (sl_id),
    constraint users_links_user_id_fk
        foreign key (ul_user_id) references swappydb.user (u_id)
);


