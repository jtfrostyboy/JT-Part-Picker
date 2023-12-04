const { Schema } = require('mongoose')

const partSchema = new Schema(
    {
        name: { type: String}
    }
)

module.exports = partSchema