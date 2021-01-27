const mongoose = require('mongoose')
const Schema = mongoose.Schema

/* Developer Schema */
const developerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    location: String,
    email: String,
    gh_personal_token: String,
    projectsCount: Number,
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: "Project"
        }
    ],
    isActive: Boolean,
    createdAt: Number,
    updateAt: Number
},
{ timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } }
)

/* Create Model From Schema */
const DeveloperSchema = mongoose.model('DeveloperSchema', developerSchema)

/* Export Model */
module.exports = DeveloperSchema