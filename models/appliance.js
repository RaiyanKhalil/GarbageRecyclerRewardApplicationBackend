const mongoose = require('mongoose')

const electricityConsumptionSchema = new mongoose.Schema({
    applianceName: {
      type: String,
      required: true,
      trim: true,
    },
    powerRatingWatt: {
      type: Number,
      required: true,
    },
    dailyUsage: [
            {
            date: {
                type: Date,
                default: Date.now
            },
            usageKWh: {
                type: Number,
                required: true
            }
        }
    ],
});
  
const ElectricityConsumption = mongoose.model('ElectricityConsumption', electricityConsumptionSchema);

module.exports = ElectricityConsumption;
