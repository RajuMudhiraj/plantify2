// configuring dotenv 
require('dotenv').config();

const { Sequelize } = require('sequelize')


const sequelize = new Sequelize("postgres://" + process.env.ELEPHANTSQL_USR + ":" + process.env.ELEPHANTSQL_PWD + "@localhost:5432/capstone", {
    logging: false,
    define: {
        freezeTableName: true
    }
})
async function connect(sequelize) {
    try {
        await sequelize.authenticate();
        console.log('Connection to elephantsql has been established successfully.');

        // making sequelize create tables if not exist 
        await sequelize.sync()


    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { sequelize, connect }