const mongoose = require('mongoose')

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
            type: mongoose.Schema.Types.ObjectId,
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
const DeveloperModel = mongoose.model('DeveloperSchema', developerSchema)

/* Export Model */
module.exports = DeveloperModel