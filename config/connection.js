// REQUIRES
const mysql = require('mysql2/promise');
const keys = require('./keys');



// MYSQL PARAMS
const pool = mysql.createPool({
    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: keys.mySQL.username,
    password: keys.mySQL.password,
    database: 'heroku_1c1e15f64e0f5fe'
});



// FUNCTION CALLS
module.exports = pool;