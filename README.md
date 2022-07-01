# nodeExpressMongo

# Project Init

Initialize project and add a package.json file and manage project dependency

> npm init

press enter and put require information when asked

# Express

A framework for node js
Makes building web apps (server) with much easier

> npm install express --save

# nodemon

Allow development process fast by updating code changes immediately on browser

> npm install nodemon --save-dev

# body Parser

Body-parser is the Node. js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it

> npm install body-parser --save

# Mongodb

Create a db as placesdb

# Clone the repo

# npm install

# In postman test API

POST: User
http://localhost:5000/api/users/signup

Choose Json
{
"name": "Rahas Das",
"email": "test@test.com",
"password": "alasa123",
"places": "Puri, Odisha"
}

GET Users
http://localhost:5000/api/users

Post Login
http://localhost:5000/api/users/login

{
"email": "testk@test.com",
"password": "alasa123"
}

Post places
http://localhost:5000/api/places

{
"title": "Shri Jagannatha Temple Puri",
"description": "Puri is a coastal city and a municipality in the state of Odisha in eastern India",
"address": "Grand Rd, At post, Puri, Odisha 752001",
"creator": "62bf139a85adce31732a7830"
}
#get geocoding api key free
https://developers.google.com/maps/documentation/geocoding/get-api-key
