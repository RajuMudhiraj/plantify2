const Plant = require('../models/Plant')
const { Op } = require('sequelize')

const viewPlants = (req, res) => {
    const {userId} = req.userData;
    
    Plant.findAll()
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while finding Orders." })
        })
}

module.exports = viewPlants;