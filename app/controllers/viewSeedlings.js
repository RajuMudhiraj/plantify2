const Seedling = require('../models/Seedling')
const { Op } = require('sequelize')

exports.viewNurseries = (req, res) => {

    Seedling.findAll({ where: { quantity: { [Op.gt]: 0 } } })
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while finding Nurseries." })
        })
}

