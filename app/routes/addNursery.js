const express = require('express');
const router = express.Router();

// Handling POST request to /addNursery
router.post('/', (req, res) => {qq
    const { name, address, location, photo } = req.body;

    const inputData = {
        name,
        address,
        location,
        photo
    }
    Nursery.create()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + " Something went wrong while adding Nursery." })
        })
})


module.exports = router;