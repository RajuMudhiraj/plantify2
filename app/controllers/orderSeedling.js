const Seedling = require('../models/Seedling')
const User = require('../models/User')
const AddPlace = require('../models/AddPlace')
const SeedlingOrders = require('../models/SeedlingOrders')

const { sequelize } = require('../config/database')

const { Op } = require('sequelize')

exports.orderSeedling = async (req, res) => {
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
                const order = await SeedlingOrders.create({ quantity: 1, UserId: userId, SeedlingId: seedlingId, AddPlaceId: placeId }, { transaction: t })
                console.log(order)
                const place = await AddPlace.update({ isSeedlingOrdered: true }, { where: { id: placeId } }, { transaction: t })

                res.status(201).json({ message: "Order placed successfully!" })
            })
        }
    }
    catch (err) {
        res.status(501).json(err + "")

    }
}



