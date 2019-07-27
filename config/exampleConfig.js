// SEQUELIZE CONFIGS
const configs = {
    development: {
        username: 'yourusername',
        password: 'yourpassword',
        database: 'burgersSQL_db',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql'
    },
    production: {
        username: 'yourpassword',
        password: 'yourpassword',
        database: 'yourdatabase',
        host: 'yourhost',
        port: 3306,
        dialect: 'mysql'
    }
};



// EXPORTS
module.exports = configs[process.env.NODE_ENV] ? configs[process.env.NODE_ENV] : configs['development'];