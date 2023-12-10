const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        title: { type: String },
        part: { type: String },
        description: { type: String }
    }
)

module.exports = reviewSchema