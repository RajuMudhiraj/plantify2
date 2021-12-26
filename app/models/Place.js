const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')


const Place = sequelize.define('Place', {
    // Model attributes are defined here
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    location: {
        type: DataTypes.JSON,
        lat: {
            type: DataTypes.INTEGER,
        },
        long: {
            type: DataTypes.INTEGER,
        },
    },
}, {
    timestamps: true
});

module.exports = Place;