const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        title: { type: String, required: true },
        part: { type: Schema.Types.ObjectId, ref:'Part'}
    }
)

module.exports = reviewSchema