create database if not exists userPerson;
use userPerson;

create table usuarios(
id int(20) not null auto_increment,
name varchar(30) default null,
username varchar(30) default null,
email varchar(150) default null,
password varchar(150) default null,
primary key(id)
);

insert into usuarios values
(1, 'hugo', 'hugoPro', 'hugo@gmail.com', 'hugo141898');

select * from usuarios;
