const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bodyParser = require('body-parser')

const partController = require('./controllers/partController')
const buildController = require('./controllers/buildController')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/part', partController.getAllParts)
app.get('/part/:id', partController.getOnePart)
app.post('/part', partController.createPart)
app.put('/part/:id', partController.updatePart)
app.delete('/part/:id', partController.deletePart)

app.get('/pcBuild', buildController.getAllBuilds)
app.get('/pcBuild/:id', buildController.getOneBuild)
app.post('pcBuild', buildController.createBuild)
app.put('pcBuild/:id', buildController.updateBuild)
app.delete('pcBuild/:id', buildController.deleteBuild)

app.get('/', (req, res) => {
    res.send('This is root!!')
  })

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  