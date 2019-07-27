// EXPRESS
const express = require('express');
const app = express.Router();



// MODELS
const burger = require('../models/burger');



// ROUTES
app.get('/', async (req, res) => {
    try {
        const resBurgers = await burger.findAll();

        const uneatenBurgers = resBurgers.filter(burger => { return !burger.devoured; });
        const eatenBurgers = resBurgers.filter(burger => { return burger.devoured; });

        res.status(200).render('index',
            {
                uneatenBurgers: uneatenBurgers,
                eatenBurgers: eatenBurgers
            });
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});

app.get('/api/burgers', async (req, res) => {
    try {
        const resBurgers = await burger.findAll();

        res.status(200).json(resBurgers);
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});

app.post('/api/burgers', async (req, res) => {
    if (!req.body.burger_name) {
        return res.status(400).end();
    }

    try {
        await burger.create(req.body);

        const resBurger = await burger.findOne({ order: [['id', 'DESC']] }); // Get the last burger

        res.status(200).json(resBurger);
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});

app.get('/api/burgers/:id', async (req, res) => {
    try {
        const resBurger = await burger.findOne({
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
        await burger.update(
            {
                devoured: true
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