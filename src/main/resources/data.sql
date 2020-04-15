INSERT INTO category(name)
VALUES ("해야할일");

INSERT INTO category(name)
VALUES ("하는중");

INSERT INTO category(name)
VALUES ("다했어");

INSERT INTO category(name, deleted)
VALUES ("지워진1", TRUE);

INSERT INTO category(name, deleted)
VALUES ("지워진2", TRUE);


INSERT INTO note(category_id, content, user, next)
VALUES (1, 'dan 이 해야할 일 1 \n 2번쨰 줄', 'dan', 2);
INSERT INTO note(category_id, content, user, next)
VALUES (1, 'dan 이 해야할 일 2', 'dan', 3);
INSERT INTO note(category_id, content, user, next)
VALUES (1, 'dan 이 해야할 일 3', 'dan', 4);
INSERT INTO note(category_id, content, user, next)
VALUES (1, '미슈가 해야할 일 4', '미슈', 5);
INSERT INTO note(category_id, content, user, next)
VALUES (1, '미슈가 해야할 일 5', '미슈', 6);
INSERT INTO note(category_id, content, user)
VALUES (1, '미슈가 해야할 일 6', '미슈');

INSERT INTO note(category_id, content, user)
VALUES (2, 'dan 이 하는중 1', 'dan');
INSERT INTO note(category_id, content, user)
VALUES (2, 'dan 이 하는중 2', 'dan');
INSERT INTO note(category_id, content, user)
VALUES (2, 'dan 이 하는중 3', 'dan');
INSERT INTO note(category_id, content, user)
VALUES (2, '미슈가 하는중 4', '미슈');
INSERT INTO note(category_id, content, user)
VALUES (2, '미슈가 하는중 5', '미슈');
INSERT INTO note(category_id, content, user)
VALUES (2, '미슈가 하는중 6', '미슈');

INSERT INTO note(category_id, content, user)
VALUES (3, 'sally 가 다했어 1', 'sally');
INSERT INTO note(category_id, content, user)
VALUES (3, 'sally 가 다했어 2', 'sally');
INSERT INTO note(category_id, content, user)
VALUES (3, 'sally 가 다했어 3', 'sally');
INSERT INTO note(category_id, content, user)
VALUES (3, 'jinie 가 다했어 4', 'jinie');
INSERT INTO note(category_id, content, user)
VALUES (3, 'jinie 가 다했어 5', 'jinie');
INSERT INTO note(category_id, content, user)
VALUES (3, 'jinie 가 다했어 6', 'jinie');

INSERT INTO note(category_id, content, user, deleted)
VALUES (1, 'dan 이 해야할 일 1', 'dan', TRUE);
INSERT INTO note(category_id, content, user, deleted)
VALUES (1, 'dan 이 해야할 일 2', 'dan', TRUE);

INSERT INTO note(category_id, content, user, deleted)
VALUES (2, 'dan 이 하는중 1', 'dan', TRUE);
INSERT INTO note(category_id, content, user, deleted)
VALUES (2, 'dan 이 하는중 2', 'dan', TRUE);
INSERT INTO note(category_id, content, user, deleted)
VALUES (2, 'dan 이 하는중 3', 'dan', TRUE);

INSERT INTO note(category_id, content, user, deleted)
VALUES (3, 'sally 가 다했어 1', 'sally', TRUE);
INSERT INTO note(category_id, content, user, deleted)
VALUES (3, 'sally 가 다했어 2', 'sally', TRUE);
INSERT INTO note(category_id, content, user, deleted)
VALUES (3, 'sally 가 다했어 3', 'sally', TRUE);

INSERT INTO history(user, method, uri)
VALUES ('dan', 'GET', '/api/category');

INSERT INTO history(user, method, uri)
VALUES ('sally', 'GET', '/api/category');

INSERT INTO history(user, method, uri)
VALUES ('jinie', 'GET', '/api/category');
