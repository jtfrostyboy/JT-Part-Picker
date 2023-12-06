const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        title: { type: String, required: true },
        part: { type: Schema.Types.ObjectId, ref:'Part', required: true },
        description: { type: String, required: true }
    }
)

module.exports = reviewSchema