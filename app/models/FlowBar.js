const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')


const FlowBar = sequelize.define('FlowBar', {
    // Model attributes are defined here
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    addedPlace: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    orderedSeedling: {
        type: DataTypes.BOOLEAN,
        defaultValue: false

    },
    deliveredSeedling: {
        type: DataTypes.BOOLEAN,
        defaultValue: false

    },
    planted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false

    },
    isDonated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false

    }
}, { timestamps: false });

module.exports = FlowBar;
