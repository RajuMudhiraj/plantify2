const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')

const SeedlingOrders = sequelize.define('SeedlingOrders', {
    // Model attributes are defined here
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isDelivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, { timestamps: false });

module.exports = SeedlingOrders;
