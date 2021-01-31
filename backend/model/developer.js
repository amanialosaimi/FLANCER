const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

/* Developer Schema */
const developerSchema = new mongoose.Schema({
    username: String,
    password: String,
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
developerSchema.plugin(passportLocalMongoose)

/* Create Model From Schema */
const DeveloperModel = mongoose.model('DeveloperSchema', developerSchema)

/* Export Model */
module.exports = DeveloperModel