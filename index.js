require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const conn = require('./db/conn')

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


const UserRoutes = require('./routes/UserRoutes')
app.use('/api', UserRoutes)

const ExerciseRoutes = require('./routes/ExercisesRoutes')
app.use('/api/users', ExerciseRoutes)

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
