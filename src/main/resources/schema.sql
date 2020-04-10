DROP TABLE IF EXISTS note;

CREATE TABLE note
(
    id          INT           NOT NULL AUTO_INCREMENT,
    column_name VARCHAR(100)  NOT NULL,
    content     VARCHAR(1000) NOT NULL,
    created_at  TIMESTAMP     NOT NULL DEFAULT current_timestamp,
    updated_at  TIMESTAMP     NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    user_id     VARCHAR(32)   NOT NULL,
    deleted     BOOLEAN       NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);
