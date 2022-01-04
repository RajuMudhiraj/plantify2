const Seedling = require('../models/Seedling')
const User = require('../models/User')
const AddPlace = require('../models/AddPlace')
const SeedlingOrdersPlaced = require('../models/SeedlingOrdersPlaced')

const { sequelize } = require('../config/database')

const { Op } = require('sequelize')

const orderSeedling = async (req, res) => {
    // const t = sequelize.transaction();

    try {
        const { seedlingId, placeId } = req.body;
        const { userId } = req.userData;

        // Checking if any Seedling ordered before
        const checkIfSeedlingOrdered = await AddPlace.findOne({ where: { [Op.and]: [{ isSeedlingOrdered: true }, { id: placeId }] } })
        if (checkIfSeedlingOrdered) {
            res.status(400).json({ message: "Seedling for this place is already Ordered." })
        }

        // Odering Seedling
        else {
            // Adding managed transation
            const result = await sequelize.transaction(async (t) => {

                const seedling = await Seedling.decrement('quantity', { by: 1, where: { id: seedlingId } }, { transaction: t })
                const place = await AddPlace.update({ isSeedlingOrdered: true }, { where: { id: placeId } }, { transaction: t })
                const order = await SeedlingOrdersPlaced.create({ quantity: 1, UserId: userId, SeedlingId: seedlingId }, { transaction: t })

                res.status(201).json({ message: "Order placed successfully!" })
            })
        }
    }
    catch (err) {
        res.status(501).json(err + "")

    }
}



module.exports = orderSeedling;