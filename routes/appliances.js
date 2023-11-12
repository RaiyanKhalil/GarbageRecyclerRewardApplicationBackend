const express = require('express')
const router = express.Router()
// const Appliance = require('../models/ElectricityConsumption')
const ElectricityConsumption = require('../models/appliance');

// const Appliances = require() 

//Getting all
router.get('/', async (req, res) => {
    // res.send("hello")
    try{
        const appliance = await ElectricityConsumption.find();
        res.json(appliance)
    } catch (err) {
        res.status(500).json({ messaage: err.messaage})
    }
})

//Getting One
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//Creating One
router.post('/', async (req, res) => {
    const electricityConsumption  = new ElectricityConsumption({
        applianceName: req.body.applianceName,
        powerRatingWatt:  req.body.powerRatingWatt,
        dailyUsage: req.body.dailyUsage
    })

    try{
        const newAppliance = await electricityConsumption.save();
        res.status(201).json(newAppliance);
    } catch (err) {
        res.status(400).json({message: err.messaage})
    }
})


//Updating One
router.patch('/:id', (req, res) => {

})

//Deleting One
router.delete('/:id', (req, res) => {

})

module.exports = router