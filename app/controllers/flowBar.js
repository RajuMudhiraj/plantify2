const FlowBar = require('../models/FlowBar')


const flowBar = (req, res) => {

    FlowBar.findAll({ where: { planted: false } })
        // .save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ Error: err + "" })
        })
}

module.exports = flowBar;