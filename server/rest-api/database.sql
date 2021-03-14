CREATE DATABASE todo_database;

--\c into todo_database

CREATE TABLE todo(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    description VARCHAR(255)
    
);