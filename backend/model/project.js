const mongoose = require('mongoose')

/* Project Schema */
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    stars: Number,
    watchers: Number,
    default_branch: String,
    licence: String,
    url: String,
    technology: [String],
    topics: [String],
    isVisible: Boolean,
    createdAt: Number,
    updatedAt: Number,
},
{ timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } }
    )
/* Create Model From Schema */
const ProjectModel = mongoose.model('Project', projectSchema)

/* Export Model */
module.exports = ProjectModel