Welcome to TakeMeTour's Job Quest
===

Thank you for your application. First, we would like to take a simple test on your JavaScript skill. 

Choose to do one (or both) of frontend and backend tasks. Please fork me and submit your repository at [WantToWork@takemetour.com](mailto:WantToWork@takemetour.com) by **Monday February 7th, 2016 23:59 GMT+7**. 

Frontend Task
---
![Designed page](https://raw.github.com/PanJ/job-quest/master/frontend/design.png)

- Given the [designed page](https://raw.github.com/PanJ/job-quest/master/frontend/design.png), please write HTML and CSS accordingly
- Font used is [Roboto](https://www.google.com/fonts#UsePlace:use/Collection:Roboto)
- Please take a look at API [https://www.takemetour.com/api/home](https://www.takemetour.com/api/home) and use data from the API to display the inspiration section using JavaScript

**Bonus points**

- Write the stylesheet in SASS
- Support mobile screen (responsive)
- Use Browserify or Webpack

**Question**

Please explain what is single-page application and how it work. Give examples of tools used to make SPAs.

*\<Write your answer here>*

Backend Task
---
- Develop a simple API to serve trip information
- API endpoints consists of
  - `GET /trips` list all trips (only trip `name` and `_id`)
  - `POST /trips` create new trip
  - `GET /trips/:id` get trip detail (all fields)
  - `PUT /trips/:id` update trip
  - `DELETE /trips/:id` delete trip
- Trip data consists of
  - `String` name
  - `Number` price
  - `String` description

**Bonus points**

- Use promise instead of async callback
- Use ES2015 syntax

**Question**

What is the difference between MongoDB and MySql?

*\<Write your answer here>*
- MySQL distributed and supported by Oracle Corporation, MySQL is a relational database management system (RDBMS), use Structured Query Language(SQL) to access database. After collect data must create table and schema in database. Each Tables can have relations to another database based on requirement, joins table when user want to view data of more than 1 tables by using primary key and foreign key from tables. In design phrase DBAs must identical set of fields and denormalization of data for smoothness operation. 
- MongoDB developed by MongoDB Inc. MongoDB is a database stores data in json and collect in bson. MongoDB stores data like a document, it can has many structure in same collection, dynamic schema, fast access and have no transaction control. Allow to insert data before create collection(Table is SQL).Support files storage by using GridFS. MongoDB was designed with high availability and scalability, multiple database servers supported by replication and sharding functions.