DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(150)  NOT NULL,
    devoured TINYINT(1) NOT NULL,
    PRIMARY KEY (id)
);