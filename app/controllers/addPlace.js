const AddPlace = require('../models/AddPlace')
const User = require('../models/User')
const { sequelize } = require('../config/database')
// const FlowBar = require('../models/FlowBar');


const addPlace = async (req, res) => {
    // const t = sequelize.transaction();

    try {

        // Adding managed transation
        const result = await sequelize.transaction(async (t) => {

            const { lat, long, name, addedPlace } = req.body;
            const { userId } = req.userData;

            const user = await User.findOne({ where: { id: userId } }, { transaction: t });
            const place = await user.createAddPlace({ lat, long, name }, { transaction: t });
            const flowBar = await place.creaeFlowBar({ addedPlace }, { transaction: t });

            res.status(201).json({ user, place, flowBar })



        })
    }
    catch (err) {
        res.status(501).json(err + "")

    }
}



// try {

//     const { lat, long, name, addedPlace } = req.body;
//     const { userId } = req.userData;

//     let place;

//     const user = await User.findOne({ where: { id: userId } }, { transaction: t });
//     const place = await user.createAddPlace({ lat, long, name }, { transaction: t });
//     const flowBar = await place.createFlowBar({ addedPlace }, { transaction: t });

//     res.status(201).json({ user, place, flowBar })
//     await t.commit();



// }
// catch (err) {
//     res.status(501).json(err)
//     await t.rollback();

// }



module.exports = addPlace;