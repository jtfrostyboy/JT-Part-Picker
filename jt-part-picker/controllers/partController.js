const { Part }  = require('../models');

const getAllParts = async (req, res) => {
    try {
        const parts = await Part.find()
        res.json(parts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOnePart(req, res) {
    try {
        const id = req.params.id
        const part = await Part.findById(id)
        if (part) {
            return res.json(part)
        }
        return res.status(404).send('Part with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createPart(req,res) {
    try {
        const part = await new Part (req.body)
        await part.save()
        return res.status(201).json({
            part
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updatePart(req,res) {
    try {
        const id = req.params.id
        const part = await Part.findByIdAndUpdate(id, req.body, {new: true})
        if (part) {
            return res.status(200).json(part)
        }
        throw new Error('Part not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deletePart(req,res) {
    try {
        const id = req.params.id
        const part =  await Part.findByIdAndDelete(id)
        if (part) {
            return res.status(200).json(part)
        }
        throw new Error('Part not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}




module.exports = {
    getAllParts,
    getOnePart,
    createPart,
    updatePart,
    deletePart
}