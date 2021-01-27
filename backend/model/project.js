const mongoose = require('mongoose')

/* Schema */
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
const ProjectSchema = mongoose.model('ProjectSchema', projectSchema)

/* Export Model */
module.exports = ProjectSchema