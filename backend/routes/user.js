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
                    const newProjectDetails = new Project(request.body)
                    //newProjectDetails.topics.push(request.body.topics)
                    newProjectDetails.save((err, project) => {
                        if (!err) { response.json(project) }
                    })
                    user.projects.push(newProjectDetails)
                    user.save()
                })
            } catch (err) { console.log(err) }
        } else {
            response.json({ message: "You must log in to create new project" })
        }
    })
/// update project
user.route('/project/:id')
.put(async(req, res) => {
  console.log('PARAMS:', req.params);
   await Project.findById(req.params.id)
    .then((foundProject) => {
      if (foundProject) {
        return foundProject.update(req.body);
      } else {
        res.status(404).json({
          error: {
            message: "The provided ID doesn't match any documents",
          },
        });
      }
    })
    .then(() => {
      // If the update succeeded, return 204 and no JSON
      res.status(202).json({message: "Project updated sucessfully"});
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error })
    });
});

    /* Initial Project Collection For First Time */
// user.route('/projects')
//     .get(async (req, res, next) => {
//         try {
//             await Project.create({ title: "hola" }, (err, logs) => {
//                 if (!err && logs.length > 0) {
//                     res.json(logs)
//                 } else {
//                     next(res.status(204).send())
//                 }
//             })
//         } catch (error) {
//             console.log(error)
//             next(res.status(500).json({ status: "rejected" }))
//         }
//     })


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
user.put('/:id', async (request, response) => {
    if (request.isAuthenticated()) {
        if (request.params.id == request.user._id) {
            try {
                await Developer.findByUsername(request.user.username, async (err, user) => {
                    if (!err) {
                        if (request.body.password) {
                            await user.setPassword(request.body.password, async function () {
                                await user.save((err, result) => {

                                    if (err) console.log("Not happening: ", err)
                                    response.status(200).json({ message: 'Profile Updated' });
                                });
                               
                            })
                        } else {
                            user.email = request.body.email
                            user.save()
                            response.status(200).json({ message: 'Email Updated' });
                        }
                    } else {
                        response.status(401).json({ message: 'Cannot update' });
                    }

                })
            }
            catch (err) { console.log(err) }
        } else { response.json({ message: "You are not allowed to update profile" }) }
    } else {
        response.json({ message: "You must log in to edit your profile" })
    }
})
// find public projects for show it to other users 
user.get('/publicProjects', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            await Developer.find({})
                .populate("projects")
                .exec((err, result) => {
                    if (!err) {
                        let publicProjects = []
                        result.map((user) => {
                            user.projects.map((userProject) => {
                                if (userProject && userProject.isVisible) {
                                    publicProjects.push({ user: [user._id, user.username], project: userProject })
                                }
                            })
                        })
                        res.json(publicProjects)
                    }
                })
        } catch (err) {
            console.log(err)
        }
    } else {
        res.json({ message: "You must register/login to read users' projects" })
    }
})
/* Delete | delete User account */
user.delete('/deleteAccount', async (request, response) => {
    if (request.isAuthenticated()) {
        if (request.query.deleteProfile == request.user._id) {
            try {
                await Developer.deleteOne({ _id: request.user._id }, (err, result) => {
                    if (!err) {
                        response.json({ message: 'Account deleted ' });
                    } else {
                        response.json(err);
                    }
                });
            }
            catch (err) {
                console.log(err)
            }
        } else {
            response.json({ message: "You are not allowed to delete account" })
        }
    } else {
        response.json({ message: "You must log in to delete your account" })
    }
})

module.exports = { user } 
