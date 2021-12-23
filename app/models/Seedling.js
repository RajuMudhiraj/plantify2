const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')


exports.default = sequelize.define('Seedling', {
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
        type: DataTypes.NUMBER
    },
    status: {
        type: DataTypes.ENUM("notReadyToDistribute", "readyToDistribute"),
        defaultValue: "notReadyToDistribute"

    }

}, {
    timestamps: true
});

