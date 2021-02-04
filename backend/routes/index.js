const { Router } = require('express')
const index = Router()
const GitHubExtended = require('../lib/ThirdParty/GitHubExtend')
const Github = new GitHubExtended(({
    token: process.env.GITHUB_TOKEN
}))
index.route('/:username')
    .get(async (request, response) => {
        if (request.isAuthenticated()) {
            let profileInfo = {};
            let repos = [];
            if (request.params.username){
            await Github.getUserProfile(request.params.username).then((profile) => {
                profileInfo = {
                    'fullname': profile.name,
                    'location': profile.location,
                    'public_repos': profile.public_repos,
                    // 'private_repos': profile.total_private_repos,
                    'following': profile.following,
                    'followers': profile.followers
                }
                return profileInfo
            })

            await Github.getUserRepos(request.params.username)
                .then((result) => {
                    result.map((repo) => {
                        repos.push({
                            'repo_name': repo.name,
                            'isPrivate': repo.private,
                            'forksCount': repo.forks,
                            'stars': repo.stargazers_count,
                            'watchers': repo.watchers_count
                        })
                    })
                    return repos
                })
                response.json({profileInfo, repos})
            } else {
                response.json({messagge: "You must specifiy params of username in your request"})
            }
        } else {
            response.redirect('/auth/login')
        }
    })
module.exports = { index }