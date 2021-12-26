const Nursery = require('../models/Nursery')

const viewNurseries = (req, res) => {

    Nursery.findAll()
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while finding Nurseries." })
        })
}

module.exports = viewNurseries;