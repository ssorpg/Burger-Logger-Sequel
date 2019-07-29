// EXPRESS
const express = require('express');
const app = express.Router();



// MODELS
const User = require('../models/user');



// ROUTES
app.get('/api/users', async (req, res) => {
    try {
        const resUsers = await User.findAll();

        res.status(200).json(resUsers);
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const found = await User.findOne({
            where: {
                user_name: req.body.user_name
            }
        });

        if (found === null) {
            await User.create(req.body);
        }

        res.status(200).end();
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});

app.get('/api/users/:id', async (req, res) => {
    try {
        const resUser = await User.findOne({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json(resUser);
    }
    catch (err) {
        res.status(500).end();
        throw err;
    }
});



// EXPORTS
module.exports = app;