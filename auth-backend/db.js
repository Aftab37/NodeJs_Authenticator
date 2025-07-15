// nodeJs_authenticator\auth-backend\db.js

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// dotenv configuration 
dotenv.config(); 

const mySqlPool = mysql.createPool({
    host: "localhost",
    user: "root", 
    password: process.env.PASSWORD,
    database: "nodejs_authentication"
});

module.exports = mySqlPool;