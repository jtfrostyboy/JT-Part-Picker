const { Schema } = require('mongoose')

const partSchema = new Schema(
    {
        name: { type: String},
        type: { type: String},
        price: {type: String}
    }
)

module.exports = partSchema