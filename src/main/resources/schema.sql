DROP TABLE IF EXISTS note;

CREATE TABLE note
(
    id          BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user        VARCHAR(50)        NOT NULL,
    category_id BIGINT             NOT NULL REFERENCES category (id),
    content     VARCHAR(1000)      NOT NULL,
    created_at  TIMESTAMP          NOT NULL DEFAULT current_timestamp,
    updated_at  TIMESTAMP          NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    next        BIGINT,
    deleted     BOOLEAN            NOT NULL DEFAULT FALSE
);


DROP TABLE IF EXISTS category;

CREATE TABLE category
(
    id      BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name    VARCHAR(100)       NOT NULL,
    deleted BOOLEAN            NOT NULL DEFAULT FALSE
);

DROP TABLE IF EXISTS history;

CREATE TABLE history
(
    id         BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user       VARCHAR(50)        NOT NULL,
    content    VARCHAR(1000)      NOT NULL,
    created_at TIMESTAMP          NOT NULL DEFAULT CURRENT_TIMESTAMP
);

# ALTER TABLE note ADD FOREIGN KEY (id) REFERENCES note (NEXT);
