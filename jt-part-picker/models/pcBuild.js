const { Schema } = require('mongoose')

const pcBuildSchema = new Schema(
    {
        name: { type: String, required: true },
        parts: { type: Array, ref: 'Part'}
    }
)