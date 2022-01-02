const Seedling = require('../models/Seedling')
const Nursery = require('../models/Nursery')

const addSeedling = (req, res) => {
    const { name, price, quantity, photo, NurseryId } = req.body;

    Seedling.findOne({where: {name:name}})
    .then(data => {
        console.log(data)
        if(data){
            res.status(400).json({message:`${data.dataValues.name} already exists.`})
        }
        else{
            Seedling.create({ name, price, quantity, photo, NurseryId })
            // .save()
            .then(data => {
    
                console.log(data)
                res.status(201).json(data)

    
            })
            .catch(err => {
                res.status(500).json({ Error: err + "" })
            })  
        }
    })


    // Nursery.findOne({where: { id: nurseryId }})
    //     .then(result => {
    //         console.log(result)
    //         return result.createSeedling({ name, price, quantity, photo })
    //     })
    //     .then(result => {
    //         res.status(201).json(result)
    //     })
    //     .catch(err => {
    //         res.status(500).json(err + "")
    //     })


    // Seedling.create({ name, nurseryId })
    //     // .save()
    //     .then(data => {

    //         console.log(data)

    //     })
    //     .catch(err => {
    //         res.status(500).json({ Error: err + "" })
    //     })
}

module.exports = addSeedling;