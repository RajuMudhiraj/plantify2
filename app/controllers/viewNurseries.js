const Nursery = require('../models/Nursery')

exports.viewNurseries = (req, res) => {

    Nursery.findAll()
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while finding Nurseries." })
        })
}

