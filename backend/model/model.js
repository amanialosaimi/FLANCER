const mongoose = require('mongoose')

/* Schema */
const projectSchema = new mongoose.Schema({})

/* Create Model From Schema */
const ProjectSchema = mongoose.model('ProjectSchema', projectSchema)

/* Export Model */
module.exports = ProjectSchema
