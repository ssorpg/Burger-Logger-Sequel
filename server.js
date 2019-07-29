// EXPRESS
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// HANDLEBARS
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



// ROUTING
const htmlRoutes = require('./controllers/html_controllers');
const burgerRoutes = require('./controllers/burger_controllers');
const userRoutes = require('./controllers/user_controllers');

app.use(htmlRoutes);
app.use(burgerRoutes);
app.use(userRoutes);



// SERVER INIT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
    console.log('');
});