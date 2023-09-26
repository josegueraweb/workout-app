// Creates an instance of the "Router" object that is available through Express.js
const router = require('express').Router();


// Imports JavaScript modules from "controllers" folder
const apiRoutes = require('./api/userController');
const homeroutes = require('./homeRoutes');


// Lets the Express Router() object utilize JavaScript modules from "controllers" folder.
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


// Exports this file. 
module.exports = router; 