const Nursery = require('../models/Nursery')


const addNursery = (req, res) => {
    const { name, address, lat, long, photo } = req.body;
    const {userId} = req.userData;


    Nursery.create({ name, address, lat, long, photo, UserId : userId })
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + "" })
        })
}

module.exports = addNursery;