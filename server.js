// Imports JavaScript modules that will be used in this application. 
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');


// Creates an instance of the Express.js application. 
const app = express();


// Sets up the port for this application ... will use Heroku if deployed, default to "localhost: 3001" otherwise. 
const PORT = process.env.PORT || 3001;


// [figure out later ... handlebars.js stuff]
hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// [figure out later... routes stuff]
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


// Imports Express.js middleware. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Starts Express.js server ... listens at PORT. 
app.listen(PORT, () => console.log('Server is now listening for requests!'));