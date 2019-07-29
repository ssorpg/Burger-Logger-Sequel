// EXPRESS
const express = require('express');
const app = express.Router();



// MODELS
const Burger = require('../models/burger');
const User = require('../models/user');



// ROUTES
app.get('/', async (req, res) => {
    try {
        const resBurgers = await Burger.findAll({ // Get the 10 latest burgers
            limit: 10,
            order: [['createdAt', 'DESC']],
            include: [User]
        });

        res.status(200).render('index', { burgers: resBurgers });
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});



// EXPORTS
module.exports = app;