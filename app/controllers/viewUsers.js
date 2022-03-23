const User = require('../models/User')

exports.viewUsers = (req, res) => {

    User.findAll()
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while finding Users." })
        })
}

