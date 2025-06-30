const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mysqlpool = require('./db');

// dotenv configuration 
dotenv.config(); 
  
//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.get('/test', (req, res) => {
    res.status(200).send('<h1>Nodesjs Running</h1>') 
})


// port
const PORT = process.env.PORT || 8000;

// contidionally Listen
mysqlpool
    .query('SELECT 1')  
    .then(() => {
    // MY SQl
    console.log('MySQ DB Connected'.bgCyan.white);
    // listen
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`.bgMagenta.white);
    });   
})
.catch((error) => {
    console.log(error);
});





