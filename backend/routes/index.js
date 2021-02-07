const { Router } = require('express')
const index = Router()
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
    baseUrl: "https://git.generalassemb.ly/api/v3",
});
index.route('/')
    .get(async (request, response) => {
        if (request.isAuthenticated()) {
            let userRepos
            let userProfile

            await octokit.request('GET /user', {  
            }).then((foundProfile) => {
                userProfile = foundProfile.data
            }).catch((err)=>{
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
            }).catch((err)=>{
                console.log(err)
            })

            response.json({profile: userProfile, repos: userRepos})

        } else {
            response.redirect('/auth/login')
        }
    })
module.exports = { index }