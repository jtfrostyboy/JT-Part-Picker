
const mongoose = require('mongoose')
const partSchema = require('./part')
const partListSchema = require('./partList')


const Part = mongoose.model('part', package)
const PartList = require('partList', partListSchema)

module.exports = {
    Part,
}