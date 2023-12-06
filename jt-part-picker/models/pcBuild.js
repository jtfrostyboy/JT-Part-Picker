const { Schema } = require('mongoose')

const pcBuildSchema = new Schema(
    {
        name: { type: String, required: true },
        cpu: { type: String, required: true },
        gpu: { type: String, required: true },
        ram: { type: String, required: true },
        storage: { type: String, required: true },
        motherboard: { type: String, required: true },
        powerSupply: { type: String, required: true },
        case: { type: String, required: true },
        totalPrice: { type: String, required: true },
   }
)

module.exports = pcBuildSchema