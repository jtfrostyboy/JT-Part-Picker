const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bodyParser = require('body-parser')

const partController = require('./controllers/partController')
const buildController = require('./controllers/buildController')
const reviewController = require('./controllers/reviewController')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/parts', partController.getAllParts)
app.get('/parts/:id', partController.getOnePart)
app.post('/parts', partController.createPart)
app.put('/parts/:id', partController.updatePart)
app.delete('/parts/:id', partController.deletePart)

app.get('/pcBuild', buildController.getAllBuilds)
app.get('/pcBuild/:id', buildController.getOneBuild)
app.post('/pcBuild', buildController.createBuild)
app.put('/pcBuild/:id', buildController.updateBuild)
app.delete('/pcBuild/:id', buildController.deleteBuild)

app.get('/review', reviewController.getAllReviews)
app.get('/review/:id', reviewController.getOneReview)
app.post('/review', reviewController.createReview)
app.put('/review/:id', reviewController.updateReview)
app.delete('/review/:id', reviewController.deleteReview)

app.get('/', (req, res) => {
    res.send('This is root!!')
  })

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  