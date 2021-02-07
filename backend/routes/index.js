const { Router } = require('express')
const index = Router()
const { Octokit } = require("@octokit/rest");

index.route('/')
    .get(async (request, response) => {
        if (request.isAuthenticated() && request.user.gh_personal_token) {

            const octokit = new Octokit({
                auth: request.user.gh_personal_token,
                baseUrl: "https://git.generalassemb.ly/api/v3",
            });

            let userRepos
            let userProfile

            await octokit.request('GET /user', {
            }).then((foundProfile) => {
                userProfile = foundProfile.data
            }).catch((err) => {
                console.log(err)
            })

            await octokit.request('GET /user/repos', {
                type: 'owner',
                mediaType: {
                    previews: [
                        'mercy'
                    ]
                }
            }).then((foundRepos) => {
                userRepos = foundRepos.data
                return userRepos
            }).catch((err) => {
                console.log(err)
            })

            response.json({ profile: userProfile, repos: userRepos })

        } else {
            response.json({status: 'You must add your Github Personal Token to your profile for retrieve repos.'})
        }
    })
module.exports = { index }