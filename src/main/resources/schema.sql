drop table if exists note;

create table note
(
    id          int           not null auto_increment,
    column_name varchar(100)  not null,
    content     varchar(1000) not null,
    created_at  timestamp     not null default current_timestamp,
    updated_at  timestamp     not null default current_timestamp on update current_timestamp,
    writer      varchar(32)   not null,
    is_deleted  boolean       not null default false,
    primary key (id)
);
