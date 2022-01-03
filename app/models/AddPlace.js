const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')


const AddPlace = sequelize.define('AddPlace', {
    // Model attributes are defined here
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    lat: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    long: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    isSeedlingOrdered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false

    },
    isSeedlingDelivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false

    },
    isPlanted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false

    },
    isDonated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false

    }
}, { timestamps: false });

module.exports = AddPlace;