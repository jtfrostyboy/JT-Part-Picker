const { PcBuild }  = require('../models');

const getAllBuilds = async (req, res) => {
    try {
        const builds = await PcBuild.find()
        res.json(builds)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneBuild(req, res) {
    try {
        const id = req.params.id
        const build = await PcBuild.findById(id)
        if (build) {
            return res.json(task)
        }
        return res.status(404).send('Build with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createBuild(req,res) {
    try {
        const build = await new PcBuild (req.body)
        await build.save()
        return res.status(201).json({
            build
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateBuild(req,res) {
    try {
        const id = req.params.id
        const build = await PcBuild.findByIdAndUpdate(id, req.body, {new: true})
        if (build) {
            return res.status(200).json(build)
        }
        throw new Error('Build not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteBuild(req,res) {
    try {
        const id = req.params.id
        const build =  await PcBuild.findByIdAndDelete(id)
        if (build) {
            return res.status(200).json(build)
        }
        throw new Error('Build not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}




module.exports = {
    getAllBuilds,
    getOneBuild,
    createBuild,
    updateBuild,
    deleteBuild
}