DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chocolate","Food", 5.50, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ice Cream","Food", 12.20, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Mario","Video Games", 60.99, 160);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Donkey Kong","Video Games", 59.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computers","Electronics", 500.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iphone 300","Electronics", 1000.89, 421);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lightsaber","Space equimpment", 10.49, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NEW R2D2 CLASSIC DROID LD ","Space equipment ", 84000.98, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("X-wing XV","Space Vehicles", 400000.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Rider Bike ","Space Vehicles", 200.88, 81);