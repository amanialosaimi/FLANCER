const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

/* Developer Schema */
const developerSchema = new mongoose.Schema({
    username: String,
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
    last_login: Date,
    attemps: String,
    isActive: Boolean,
    createdAt: Number,
    updatedAt: Number
},
{ timestamps: { currentTime: () => Math.floor(Date.now() / 1000) } }
)
developerSchema.plugin(passportLocalMongoose, {lastLoginField: 'lastLogin', limitAttempts: true, attemptsField: 'attemps'})

/* Create Model From Schema */
const DeveloperModel = mongoose.model('Developer', developerSchema)

/* Export Model */
module.exports = DeveloperModel