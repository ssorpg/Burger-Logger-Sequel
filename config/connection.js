// REQUIRES
const Sequelize = require('sequelize');
const config = require('./config');



// MYSQL PARAMS
const sequelize = new Sequelize(config);



// FUNCTION CALLS
module.exports = sequelize;