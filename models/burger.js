// SEQUELIZE REQUIRE
const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');



// BURGER MODEL
const Burger = sequelize.define('burgers', {
    burger_name: { type: Sequelize.STRING, allowNull: false },
    devoured: { type: Sequelize.BOOLEAN, defaultValue: false },
    devoured_by: { type: Sequelize.STRING, allowNull: false }
});

Burger.sync();



// EXPORTS
module.exports = Burger;