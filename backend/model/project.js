const mongoose = require('mongoose')

/* Project Schema */
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    stars: Number,
    watchers: Number,
    default_branch: String,
    date: Date,
    licence: String,
    url: String,
    technology: String,
    topics: [String],
    isVisible: String,
    createdAt: Number,
    updatedAt: Number,
},
{ timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } }
    )
/* Create Model From Schema */
const ProjectModel = mongoose.model('Project', projectSchema)

/* Export Model */
module.exports = ProjectModel