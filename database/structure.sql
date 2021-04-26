CREATE DATABASE nodebike;

CREATE TABLE categories;

CREATE TABLE users (
    ID int NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email varchar(255),
    password varchar(255),
    category_id int,
	avatar_image varchar(255),
    PRIMARY KEY (ID),
    FOREIGN KEY (category_id) REFERENCES users_category(ID)
);

CREATE TABLE products (
    ID int NOT NULL,
    product_name varchar(255) NOT NULL,
    product_description varchar(255),
    product_image varchar(255),
    category_id int,
    price DECIMAL,
    product_stock varchar(255),
    PRIMARY KEY (ID),
    FOREIGN KEY (category_id) REFERENCES categories(ID)
);

CREATE TABLE users_category (
    ID int NOT NULL,
    category_id int
);