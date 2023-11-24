const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_user_name',
    password: 'your_password',
    database: 'database_name',
});

module.exports = connection;