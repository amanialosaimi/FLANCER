/* Import Packages */
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
/* Import RESTful API Routes */
const { index } = require('./routes/index')
/* Initial Express Server */
const app = express()
/* Database Connection */
const db = 'Flancer';
const Projects = require("./model/project");
const Developers = require("./model/developer");

mongoose.connect(`mongodb://localhost:27017/${db}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());
/* RESTful API Routes */
app.use('/api/v1', index)

app.get('/', (req, res) => {
    res.send(`We're in`)
  })
app.get('/projects', (req, res) => {
    console.log('GET /projects')
    Projects.find({}, function (err, data) {
        res.json(data);
      }); 
 })
app.get('/developers', (req, res) => {
    console.log('GET /developers')
    Developers.find({}, function (err, data) {
        res.json(data);
      }); 
 })
/* Application Port */
const PORT = process.env.PORT || 3000
/* API Server Listen For Connections */
app.listen(PORT, () => { console.log(`Project 3 API Server listening on port ${PORT}`) })
