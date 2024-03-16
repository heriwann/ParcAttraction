DROP TABLE IF EXISTS attraction;

CREATE TABLE attraction (
    attraction_id int auto_increment,
    primary key(attraction_id),
    nom varchar(255) not null,
    description varchar(255) not null,
    difficulte int,
    visible bool default true
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id int auto_increment,
    primary key(users_id),
    name varchar(255) not null,
    password varchar(255) not null
);

DROP TABLE IF EXISTS Critique;

CREATE TABLE  Critique
    critique_id int NOT NULL AUTO_INCREMENT,
    commentaire text NOT NULL,
    note int CHECK (note BETWEEN 0 AND 5),
    date_critique timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP