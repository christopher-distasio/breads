// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


// mongoose.connect("mongodb://localhost:27017/breads", {useNewUrlParser: true, useUnifiedTopology: true})

// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
//   () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
// )

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// MIDDLEWARE
app.use(methodOverride('_method'))


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

app.use(express.urlencoded({ extended: true }))
// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)


// MIDDLEWARE
app.use(express.static('public'))


// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
