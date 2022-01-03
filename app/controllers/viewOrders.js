const SeedlingOrdersPlaced = require('../models/SeedlingOrdersPlaced')
const { Op } = require('sequelize')

const viewOrders = (req, res) => {
    const {userId} = req.userData;
    
    SeedlingOrdersPlaced.findAll({ where: { UserId: userId}})
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while finding Orders." })
        })
}

module.exports = viewOrders;