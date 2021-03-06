const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')

const Seedling = sequelize.define('Seedling', {
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
    price: {
        type: DataTypes.DECIMAL,
        defaultValue: 0
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    photo: {
        type: DataTypes.STRING,
    }

}, { timestamps: false });

module.exports = Seedling;
