const Nursery = require('../models/Nursery')


exports.addNursery = (req, res) => {
    const { name, address, lat, long, photo } = req.body;
    const { userId } = req.userData;


    Nursery.create({ name, address, lat, long, photo, UserId: userId })
        // .save()
        .then(result => {
            res.status(201).json({
                success: true,
                message: "Nursery created successfully!"
            })
        })
        .catch(err => {
            res.status(400).json({
                success: false,
                message: err + ""
            })
        })
}

