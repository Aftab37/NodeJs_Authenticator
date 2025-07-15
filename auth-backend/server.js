// nodeJs_authenticator\auth-backend\server.js

const express = require('express');
const mysqlpool = require('./db');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser')

const colors = require('colors');
const morgan = require('morgan');

//rest object
const app = express();

// port
const PORT = process.env.PORT || 8000;

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors()); 


// dotenv configuration 
dotenv.config(); 

// routes
// app.get('/test', (req, res) => {
//     res.status(200).send('<h1>Nodesjs Running</h1>') 
// })

// contidionally Listen
mysqlpool
    .query('SELECT 1')  
    .then(() => {
    // MY SQl
    console.log('MySQ DB Connected'.bgCyan.white); 
})
.catch((error) => {
    console.log(error);
});

// listen
 app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`.bgMagenta.white);
});   




