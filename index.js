// configuring dotenv 
require('dotenv').config();

//requiring express
const express = require('express')

// assigning express function to app const
const app = express();

// requiring sequelize instance and connect function and connecting to Database
const { sequelize, connect } = require('./app/config/database')
connect(sequelize)


//body-parser
app.use(express.json())
// home route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Plant1Tree" });

});

// Sign in route
app.use('/signin', require('./app/routes/signIn'))

// Sign up route
app.use('/signup', require('./app/routes/signUp'))



// set port, listen for requests
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(`Couldn't start the server. Error: ${err}`)
    }
    console.log(`Server is running on port ${process.env.PORT}.`);
});