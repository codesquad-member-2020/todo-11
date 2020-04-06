drop table note;

create table note
(
    id          int           not null auto_increment,
    column_name varchar(100)  not null,
    content    varchar(1000) not null,
    created_at  timestamp     not null default current_timestamp,
    updated_at  timestamp     not null default current_timestamp on update current_timestamp,
    writer      varchar(32)   not null,
    primary key (id)
);

insert into note(column_name, content, writer)
values ('해야할일', 'dan 이 해야할 일 1', 'dan');
insert into note(column_name, content, writer)
values ('해야할일', 'dan 이 해야할 일 2', 'dan');
insert into note(column_name, content, writer)
values ('해야할일', 'dan 이 해야할 일 3', 'dan');
insert into note(column_name, content, writer)
values ('해야할일', '미슈가 해야할 일 4', '미슈');
insert into note(column_name, content, writer)
values ('해야할일', '미슈가 해야할 일 5', '미슈');
insert into note(column_name, content, writer)
values ('해야할일', '미슈가 해야할 일 6', '미슈');

insert into note(column_name, content, writer)
values ('하는중', 'dan 이 하는중 1', 'dan');
insert into note(column_name, content, writer)
values ('하는중', 'dan 이 하는중 2', 'dan');
insert into note(column_name, content, writer)
values ('하는중', 'dan 이 하는중 3', 'dan');
insert into note(column_name, content, writer)
values ('하는중', '미슈가 하는중 4', '미슈');
insert into note(column_name, content, writer)
values ('하는중', '미슈가 하는중 5', '미슈');
insert into note(column_name, content, writer)
values ('하는중', '미슈가 하는중 6', '미슈');

insert into note(column_name, content, writer)
values ('다했어', 'sally 가 다했어 1', 'sally');
insert into note(column_name, content, writer)
values ('다했어', 'sally 가 다했어 2', 'sally');
insert into note(column_name, content, writer)
values ('다했어', 'sally 가 다했어 3', 'sally');
insert into note(column_name, content, writer)
values ('다했어', 'jinie 가 다했어 4', 'jinie');
insert into note(column_name, content, writer)
values ('다했어', 'jinie 가 다했어 5', 'jinie');
insert into note(column_name, content, writer)
values ('다했어', 'jinie 가 다했어 6', 'jinie');

select *
from note;


select id, column_name, content, created_at, updated_at, writer
from note;

commit;
