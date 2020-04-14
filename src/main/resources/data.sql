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


INSERT INTO note(category_id, content, user, rank)
VALUES (1, 'dan 이 해야할 일 1 \n 2번쨰 줄', 'dan', 1);
INSERT INTO note(category_id, content, user, rank)
VALUES (1, 'dan 이 해야할 일 2', 'dan', 2);
INSERT INTO note(category_id, content, user, rank)
VALUES (1, 'dan 이 해야할 일 3', 'dan', 3);
INSERT INTO note(category_id, content, user, rank)
VALUES (1, '미슈가 해야할 일 4', '미슈', 4);
INSERT INTO note(category_id, content, user, rank)
VALUES (1, '미슈가 해야할 일 5', '미슈', 5);
INSERT INTO note(category_id, content, user, rank)
VALUES (1, '미슈가 해야할 일 6', '미슈', 6);
INSERT INTO note(category_id, content, user, rank)
VALUES (1, 'anonymous 가 해야할 일 6', 'anonymous', 9);
INSERT INTO note(category_id, content, user, rank)
VALUES (1, 'anonymous 가 해야할 일 6', 'anonymous', 10);
INSERT INTO note(category_id, content, user, rank)
VALUES (1, 'anonymous 가 해야할 일 6', 'anonymous', 11);

INSERT INTO note(category_id, content, user, rank)
VALUES (2, 'dan 이 하는중 1', 'dan', 1);
INSERT INTO note(category_id, content, user, rank)
VALUES (2, 'dan 이 하는중 2', 'dan', 2);
INSERT INTO note(category_id, content, user, rank)
VALUES (2, 'dan 이 하는중 3', 'dan', 3);
INSERT INTO note(category_id, content, user, rank)
VALUES (2, '미슈가 하는중 4', '미슈', 4);
INSERT INTO note(category_id, content, user, rank)
VALUES (2, '미슈가 하는중 5', '미슈', 5);
INSERT INTO note(category_id, content, user, rank)
VALUES (2, '미슈가 하는중 6', '미슈', 6);
INSERT INTO note(category_id, content, user, rank)
VALUES (2, 'anonymous가 하는중 5', 'anonymous', 10);
INSERT INTO note(category_id, content, user, rank)
VALUES (2, 'anonymous가 하는중 6', 'anonymous', 11);

INSERT INTO note(category_id, content, user, rank)
VALUES (3, 'sally 가 다했어 1', 'sally', 1);
INSERT INTO note(category_id, content, user, rank)
VALUES (3, 'sally 가 다했어 2', 'sally', 2);
INSERT INTO note(category_id, content, user, rank)
VALUES (3, 'sally 가 다했어 3', 'sally', 3);
INSERT INTO note(category_id, content, user, rank)
VALUES (3, 'jinie 가 다했어 4', 'jinie', 4);
INSERT INTO note(category_id, content, user, rank)
VALUES (3, 'jinie 가 다했어 5', 'jinie', 5);
INSERT INTO note(category_id, content, user, rank)
VALUES (3, 'jinie 가 다했어 6', 'jinie', 6);
INSERT INTO note(category_id, content, user, rank)
VALUES (3, 'anonymous가 다했어 5', 'anonymous', 10);
INSERT INTO note(category_id, content, user, rank)
VALUES (3, 'anonymous가 다했어 6', 'anonymous', 11);

INSERT INTO note(category_id, content, user, deleted, rank)
VALUES (1, 'dan 이 해야할 일 1', 'dan', TRUE, 7);
INSERT INTO note(category_id, content, user, deleted, rank)
VALUES (1, 'dan 이 해야할 일 2', 'dan', TRUE, 8);

INSERT INTO note(category_id, content, user, deleted, rank)
VALUES (2, 'dan 이 하는중 1', 'dan', TRUE, 7);
INSERT INTO note(category_id, content, user, deleted, rank)
VALUES (2, 'dan 이 하는중 2', 'dan', TRUE, 8);
INSERT INTO note(category_id, content, user, deleted, rank)
VALUES (2, 'dan 이 하는중 3', 'dan', TRUE, 9);

INSERT INTO note(category_id, content, user, deleted, rank)
VALUES (3, 'sally 가 다했어 1', 'sally', TRUE, 7);
INSERT INTO note(category_id, content, user, deleted, rank)
VALUES (3, 'sally 가 다했어 2', 'sally', TRUE, 8);
INSERT INTO note(category_id, content, user, deleted, rank)
VALUES (3, 'sally 가 다했어 3', 'sally', TRUE, 9);

INSERT INTO history(user, method, uri)
VALUES ('dan', 'GET', '/api/category');

INSERT INTO history(user, method, uri)
VALUES ('sally', 'GET', '/api/category');

INSERT INTO history(user, method, uri)
VALUES ('jinie', 'GET', '/api/category');
