drop database if exists user_db;
create database user_db;
use user_db;
create table user(
    id int not null auto_increment primary key,
    first_name varchar(50),
    last_name varchar(50),



);