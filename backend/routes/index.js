const { Router } = require('express')
const index = Router()
const GitHubExtended = require('../lib/ThirdParty/GitHubExtend')
const Github = new GitHubExtended(({
    token: process.env.GH_TOKEN
}))
index.route('/')
    .get(async (request, response) => {

        Github.getUserProfile('apple').then((profile) => {
            console.log(
                "\nFull Name: ", profile.name,
                "Location: ", profile.location + '\n',
                "Public Repos: ", profile.public_repos,
                "Private Repos: ", profile.total_private_repos + '\n',
                "Following: ", profile.following,
                "Followers: ", profile.followers + '\n'
            )
        })

        Github.getUserRepos('apple')
            .then((result) => {
                result.map((repo) => {
                    console.log(
                        'Repo Name: ', repo.name + '\n',
                        'Private: ', repo.private,
                        'Forks: ', repo.forks,
                        'Stars: ', repo.stargazers_count,
                        'Watchers: ', repo.watchers_count + '\n'
                    )
                })
            })
    })
module.exports = { index }