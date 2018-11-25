DROP DATABASE IF EXISTS hamazonDB1;

CREATE DATABASE hamazonDB1;

USE hamazonDB1;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(45) NULL,
    department_name VARCHAR(45) NULL,
	price DECIMAL(10,2) NULL,
	stock_quantity INT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lord of the Rings", "books", 30.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sphere", "books", 20.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("headphones", "music", 50.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("back massager", "health", 25.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("turntable", "music", 300.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("airplane", "toys", 15.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("storage boxes", "household goods", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("broom", "cleaning supplies", 34.00, 175);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("skateboard", "sports", 74.00, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("basketball", "sports", 19.00, 125);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("macbook pro", "computer", 2000.00, 345);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("samsung galaxy", "phone", 1000.00, 263);

