CREATE TABLE product (
    id SERIAL UNIQUE,
    name VARCHAR(255),
    price DOUBLE PRECISION,
    image VARCHAR(255),
    creation_date TIMESTAMP NOT NULL default CURRENT_TIMESTAMP
)

CREATE TABLE "user" (
    id SERIAL UNIQUE,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(320),
    phonenumber VARCHAR(20),
    postalcode VARCHAR(16),
    street VARCHAR(255),
    streetnumber VARCHAR(24),
    country VARCHAR(255),
    province VARCHAR(255)
)

CREATE TABLE "order" (
    id SERIAL UNIQUE,
    customer BIGINT,
    order_date TIMESTAMP NOT NULL default CURRENT_TIMESTAMP
)

CREATE TABLE order_rule (
    order_id BIGINT NOT NULL,
    product BIGINT NOT NULL,
    amount INT
)