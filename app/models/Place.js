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
        type: {
            lat: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            lang: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        }
    },
}, {
    timestamps: true
});

module.exports = Place;