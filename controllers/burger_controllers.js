// EXPRESS
const express = require('express');
const app = express.Router();



// MODELS
const Burger = require('../models/burger');
const User = require('../models/user');



// ROUTES
app.get('/api/burgers', async (req, res) => {
    try {
        const resBurgers = await Burger.findAll();

        res.status(200).json(resBurgers);
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});

app.post('/api/burgers', async (req, res) => {
    if (req.body.burger_name.length < 1 || req.body.burger_name.length > 20) {
        return res.status(400).send('Please enter a burger name between 1 and 20 characters');
    }

    try {
        await Burger.create(req.body);

        const resBurger = await Burger.findOne({ order: [['id', 'DESC']] }); // Get the latest burger

        res.status(200).json(resBurger);
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});

app.get('/api/burgers/:id', async (req, res) => {
    try {
        const resBurger = await Burger.findOne({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json(resBurger);
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});

app.put('/api/burgers/:id', async (req, res) => {
    try {
        let devouredBy = req.query.devoured_by || 'Anonymous';

        console.log(req.query.devoured_by);

        devouredBy = await User.findOne({
            where: {
                user_name: devouredBy
            }
        });

        console.log(devouredBy);

        await Burger.update(
            {
                devoured_by: devouredBy.id
            },
            {
                where: {
                    id: req.params.id
                }
            });

        res.status(200).end();
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});



// EXPORTS
module.exports = app;