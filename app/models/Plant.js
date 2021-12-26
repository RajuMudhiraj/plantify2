const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')


const Plant = sequelize.define('Plant', {
    // Model attributes are defined here
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },

    photo: {
        type: DataTypes.STRING,
    }

}, {
    timestamps: true
});

module.exports = Plant;

