const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')


exports.default = sequelize.define('Nursery', {
    // Model attributes are defined here
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
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
    photo: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true
});

