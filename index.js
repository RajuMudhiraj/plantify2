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


const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')


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


// swagger ui setup
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Plant1Tree API",
            version: "1.0.0",
            description: "Api documentation"
        },
        servers: [
            {
                url: "http://localhost:5000/"
            }
        ],
    },
    apis: ["./app/routes/*.js"],
}

const specs = swaggerJsDoc(options)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))


// All apis
app.use('/', require('./app/routes/index'))


// set port, listen for requests
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(`Couldn't start the server. Error: ${err}`)
    }
    console.log(`Server is running on port ${process.env.PORT}.`);
});