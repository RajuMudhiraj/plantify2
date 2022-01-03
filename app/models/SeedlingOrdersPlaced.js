const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')

const SeedlingOrdersPlaced = sequelize.define('SeedlingOrdersPlaced', {
    // Model attributes are defined here
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
}, { timestamps: false });

module.exports = SeedlingOrdersPlaced;
