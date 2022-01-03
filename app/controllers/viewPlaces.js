const AddPlace = require('../models/AddPlace')
const {Op} = require('sequelize')


const viewPlaces = (req, res) => {

    AddPlace.findAll({ where: { [Op.and]: [{ isPlanted: false }, { isDonated: false }] } })
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + "" })
        })
}

module.exports = viewPlaces;