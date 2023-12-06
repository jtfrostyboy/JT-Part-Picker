
const mongoose = require('mongoose')
const partSchema = require('./part')
const pcBuildSchema = require('./pcBuild')
const reviewSchema = require('./review')



const Part = mongoose.model('part', partSchema)
const PcBuild = mongoose.model('pcBuild', pcBuildSchema)
const Review = mongoose.model('review', reviewSchema)


module.exports = {
    Part,
    PcBuild,
    Review   
}