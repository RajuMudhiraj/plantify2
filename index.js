// configuring dotenv 
require('dotenv').config();

//requiring express
const express = require('express')

// assigning express function to app const
const app = express();

// requiring sequelize instance and connect function and connecting to Database
const { sequelize, connect } = require('./app/config/database')
connect(sequelize)


// home route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to IMDB" });

});

// Sign in route
app.use('/signin', require('./app/routes/signIn'))

// set port, listen for requests
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(`Couldn't start the server. Error: ${err}`)
    }
    console.log(`Server is running on port ${process.env.PORT}.`);
});