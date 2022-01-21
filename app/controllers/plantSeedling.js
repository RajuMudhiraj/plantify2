const Seedling = require('../models/Seedling')
const User = require('../models/User')
const AddPlace = require('../models/AddPlace')
const Plant = require('../models/Plant')

const { sequelize } = require('../config/database')

const { Op } = require('sequelize')

const plantSeedling = async (req, res) => {
    // const t = sequelize.transaction();

    try {
        const { photo, placeId } = req.body;

        const checkIfPlanted = await AddPlace.findOne({ where: { [Op.and]: [{ isPlanted: true }, { id: placeId }] } })
        if (checkIfPlanted) {
            res.status(400).json({ message: "Seedling for this place is already Planted." })
        }
        else {
            // Adding managed transation
            const result = await sequelize.transaction(async (t) => {

                const place = await AddPlace.update({ isPlanted: true }, { where: { id: placeId } }, { transaction: t })
                const plant = await Plant.create({ photo, AddPlaceId: placeId }, { transaction: t })

                res.status(201).json({ plant })
            })
        }
    }

    catch (err) {
        res.status(501).json(err + "")

    }
}



module.exports = plantSeedling;