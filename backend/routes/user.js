const { Router } = require('express')
const user = Router()

const Developer = require('../model/developer')
const Project = require('../model/project')

/* 

User Controls Endpoints 

*/

/* POST | Create Project */
user.route('/createProject')
    .post(async (request, response) => {
        if (request.isAuthenticated()) {
            try {
                Developer.findById(request.user._id, (err, user) => {
                    const newProjectDetails = new Project({
                        title: request.body.title,
                        description: request.body.desc,
                        licence: request.body.licence,
                        technology: [],
                        topics: [],
                        url: request.body.url,
                        isVisible: request.body.isVisible,
                    })
                    newProjectDetails.technology.push(request.body.technology)
                    newProjectDetails.topics.push(request.body.topics)
                    newProjectDetails.save((err, newProject) => {
                        if (!err) console.log(newProject)
                    })
                    user.projects.push(newProjectDetails)
                    user.save((err, developerProject) => {
                        if (!err) console.log(developerProject)
                    })
                })
            } catch (err) { console.log(err) }
        } else {
            response.json({ message: "You must log in to create new project" })
        }
    })

/* GET | Show User Profile */
user.route('/profile')
    .get(async (request, response) => {
        if (request.isAuthenticated()) {
            try {
                await Developer.find({ _id: request.user._id })
                    .populate("projects")
                    .exec((err, profile) => {
                        if (!err) response.json(profile)
                    })
            } catch (err) {
                console.log(err)
            }
        } else {
            response.json({ message: "You must log in to browse your profile" })

        }
    })


/* PUT | Edit User Profile */
app.put('/:id', async (request, response) => {
    if (request.isAuthenticated()) {
        try {
            await Developer.findOneAndUpdate({ _id: request.params.id }, request.body, (err, result) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json({message: 'Profile Updated!'});
                }
            });
        } catch (err) { console.log(err) }
    } else {
        response.json({ message: "You must log in to edit your profile" })
    }
})

module.exports = { user }