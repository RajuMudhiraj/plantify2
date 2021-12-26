const Nursery = require('../models/Nursery')


const addNursery = (req, res) => {
    console.log(req.body)

    const { name, address, location, photo } = req.body;

    const inputData = {
        name: name,
        address: address,
        location: location,
        photo: photo
    }
    Nursery.create(inputData)
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while adding Nursery." })
        })
}

module.exports = addNursery;