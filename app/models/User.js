const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')


const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate:{
            isEmail:true
        }

    },
     password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM("male", "female", "others"),
        allowNull: false
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: "false",
    }
}, {
    timestamps: true
});

module.exports = User;