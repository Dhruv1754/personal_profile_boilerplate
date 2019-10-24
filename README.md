# MERN Isomorphic Webpack 2 Boilerplate based on [ant.design](https://ant.design)
----------
### Author and Purpose
This project was made to help fellow students I was tutoring to start building a MERN stack application without having to build it from scratch. It is bootstrapped from create react app and has added feature for customizability to a full stack.- Dhruv Mahajan 

### About
----------
This boilerplate has following feature:

 * Universal React rendering
 * Babel js for server side transformation
 * import using absolute path in client and server for make code reuse easier
 * development hot reloading
 * Mongodb Js for backend api(for No-Sql)
 * using ui framework ant.design
 * latest React Router 5
 * express-handlebars for server side templating
 * custom console logger for better log visibility & trace
 * nested route on react router 5 supported in server and client

### Technologies
----------
Important technologies used
* [Node Js](https://nodejs.org/en/)
* [Express Js](https://expressjs.com/)
* [React Js](https://github.com/reactjs) version 16.10
* [React Router](https://github.com/ReactTraining/react-router) version 5+
* [React Redux](https://github.com/reactjs/react-redux) version 7+
* [Ant Design](https://ant.design) version 3.2+
* [Babel Js](https://babeljs.io/) core version 6.24
* [Webpack](https://webpack.js.org/) version 2.5+

### Installation
----------
* Clone the repo
* cd project folder
* npm install (in cmd/ terminal)

### Commands
----------
* To run development server 
	>npm start-dev
* To clean previous asset and build new and then run production server
 	>npm run build
	>npm start
* To run production using previuosly built asset
 	>npm run serve
* To clean previously built assets
 	>npm run clean

### Template Page Link: https://mern--boilerplate.herokuapp.com/
----------
This includes an Antd Form with redux integrated which can communicate to back end edit mongo db hosted at your choice of url.


* Adding UX component in front end to communicate to back end

* Requirements needed to Add Mongo Db to the controller
	- Mongo DB connection URI. You can easily get a free cloud mongo db at https://cloud.mongodb.com. Follow the exact steps after making free account.
	-Go to server\controllers\mongoDBquery.mjs and edit URI to include your URI you get from mongodb

	- Use Example code in server\controllers\mongoDBquery.mjs
	This query will just query the collection "test_collection" inside db "test" inside my db at the respective URI provided by mongo db

	- For more reference queries for mongo I found https://www.w3schools.com/nodejs/nodejs_mongodb.asp
	usefull
