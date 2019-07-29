// SEQUELIZE REQUIRE
const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');



// BURGER MODEL
const User = sequelize.define('users', {
    user_name: {
        type: Sequelize.STRING
    }
});

async function syncUser() { // Seed
    await User.sync();

    const data = await User.findAll();

    if (data.length === 0) {
        User.create({
            user_name: 'Anonymous'
        });
    }
}

syncUser();



// EXPORTS
module.exports = User;