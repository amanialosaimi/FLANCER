/* Import Packages */
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
/* Import RESTful API Routes */
const { ROUTERS } = require('./BACKEND')
/* Initial Express Server */
const app = express()
/* Database Connection */
const db = 'project-3';
mongoose.connect(`mongodb://localhost:27017/${db}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());
/* RESTful API Routes */
app.use('/api/v1/', ROUTERS)
/* Application Port */
const PORT = process.env.PORT || 3000
/* API Server Listen For Connections */
app.listen(PORT, () => { console.log(`Project 3 API Server listening on port ${PORT}`) })
