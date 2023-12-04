
const mongoose = require('mongoose')
const partSchema = require('./part')
const pcBuildSchema = require('./pcBuild')



const Part = mongoose.model('part', partSchema)
const PcBuild = mongoose.model('pcBuild', pcBuildSchema)


module.exports = {
    Part,
    PcBuild   
}