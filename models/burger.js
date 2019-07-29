// SEQUELIZE REQUIRE
const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');
const User = require('./user');



// BURGER MODEL
const Burger = sequelize.define('burgers', {
    burger_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Burger.belongsTo(User, {
    foreignKey: {
        name: 'devoured_by',
        allowNull: true,
        defaultValue: null
    }
});

async function syncBurger() { // Seed
    await Burger.sync();

    const data = await Burger.findAll();

    if (data.length === 0) {
        await Burger.bulkCreate(
            [
                {
                    burger_name: 'Luger Burger'
                },
                {
                    burger_name: 'Double Animal Style'
                },
                {
                    burger_name: 'The Company Burger'
                }
            ]);
    }
}

syncBurger();



// EXPORTS
module.exports = Burger;