// configuring dotenv 
require('dotenv').config();

//requiring express
const express = require('express')

// assigning express function to app const
const app = express();

// requiring cross-origin-resource-sharing
const cors = require('cors')

// requiring logger middleware (morgan)
const morgan = require('morgan')

// requiring express-session for holding data
const session = require('express-session');

// Importing middleware of verifyAdmin
const verifyAdmin = require('./app/middlewares/verifyAdmin')

// Importing middleware of verifyAuth
const verifyAuth = require('./app/middlewares/verifyAuth')


// requiring sequelize instance and connect function and connecting to Database
const { sequelize, connect } = require('./app/config/database')
connect(sequelize)

// using cors middleware
app.use(cors())

// using logger middleware
app.use(morgan('tiny'))

//body-parser
app.use(express.json())

// use session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 }
}));

// home route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Plant1Tree" });

});

// Sign in route
app.use('/signIn', require('./app/routes/signIn'))

//  check email existence and send otp
app.use('/checkEmailExistence', require('./app/routes/checkEmailExistence'))

//  verify email otp
app.use('/verifyEmailOtp', require('./app/routes/verifyEmailOtp'))

// Sign up route
app.use('/signUp', require('./app/routes/signUp'))

//  add Nursery
app.use('/addNursery', verifyAuth, require('./app/routes/addNursery'))

//  view Nurseries
app.use('/viewNurseries', verifyAuth, require('./app/routes/viewNurseries'))

//  add Seedling
app.use('/addSeedling', verifyAuth, require('./app/routes/addSeedling'))

//  view Seedlings
app.use('/viewSeedlings', verifyAuth, require('./app/routes/viewSeedlings'))

//  view Users
app.use('/viewUsers', verifyAdmin, require('./app/routes/viewUsers'))

//  flowBar
app.use('/viewPlaces', verifyAuth, require('./app/routes/viewPlaces'))

//  Add Plants Place
app.use('/addPlace', verifyAuth, require('./app/routes/addPlace'))

//  Order Seedling
app.use('/orderSeedling', verifyAuth, require('./app/routes/orderSeedling'))

//  View Orders
app.use('/viewOrders', verifyAuth, require('./app/routes/viewOrders'))




// set port, listen for requests
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(`Couldn't start the server. Error: ${err}`)
    }
    console.log(`Server is running on port ${process.env.PORT}.`);
});