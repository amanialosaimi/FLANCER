const { Router } = require('express')
const index = Router()
const GitHubExtended = require('../lib/ThirdParty/GitHubExtend')
const Github = new GitHubExtended(({
    token: process.env.GH_TOKEN
}))
index.route('/')
    .get(async (request, response) => {
        if (request.isAuthenticated()) {
            let profileInfo = {};
            let repos = [];
            await Github.getUserProfile('apple').then((profile) => {
                profileInfo = {
                    'Full Name': profile.name,
                    'Location': profile.location,
                    'Public Repos': profile.public_repos,
                    'Private Repos': profile.total_private_repos,
                    'Following': profile.following,
                    'Followers': profile.followers
                }
                return profileInfo
            })

            await Github.getUserRepos('apple')
                .then((result) => {
                    result.map((repo) => {
                        repos.push({
                            'Repo Name': repo.name,
                            'Private': repo.private,
                            'Forks': repo.forks,
                            'Stars': repo.stargazers_count,
                            'Watchers': repo.watchers_count
                        })
                    })
                    return repos
                })
                response.json({profileInfo, repos})
        } else {
            response.redirect('/auth/login')
        }
    })
module.exports = { index }