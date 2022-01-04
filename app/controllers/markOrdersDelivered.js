const Seedling = require('../models/Seedling')
const User = require('../models/User')
const AddPlace = require('../models/AddPlace')
const SeedlingOrders = require('../models/SeedlingOrders')

const { sequelize } = require('../config/database')

const { Op } = require('sequelize')

const markOrdersDelivered = async (req, res) => {
    // const t = sequelize.transaction();

    try {
        const { orderId, placeId } = req.body;

        const checkIfOrderDelivered = await SeedlingOrders.findOne({ where: { [Op.and]: [{ isDelivered: true }, { id: orderId }] } })
        if (checkIfOrderDelivered) {
            res.status(400).json({ message: "Seedling for this place is already Delivered." })
        }
        else {
            // Adding managed transation
            const result = await sequelize.transaction(async (t) => {

                const order = await SeedlingOrders.update({ isDelivered: true }, { where: { id: orderId } }, { transaction: t })
                const place = await AddPlace.update({ isSeedlingDelivered: true }, { where: { id: placeId } }, { transaction: t })

                res.status(201).json({ message: "Order placed successfully!" })
            })
        }
    }

    catch (err) {
        res.status(501).json(err + "")

    }
}



module.exports = markOrdersDelivered;