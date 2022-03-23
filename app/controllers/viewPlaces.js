const AddPlace = require('../models/AddPlace')
const {Op} = require('sequelize')


exports.viewPlaces = (req, res) => {

    AddPlace.findAll({ where: { [Op.and]: [{ isPlanted: false }, { isDonated: false }] } })
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + "" })
        })
}

