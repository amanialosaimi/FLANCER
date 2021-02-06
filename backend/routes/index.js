const { Router } = require('express')
const index = Router()
const GitHubExtended = require('../lib/ThirdParty/GitHubExtend')
const Github = new GitHubExtended({token: '60a001f915dd6a8d6850d49576351dece3e3eb2c'})
const Repository = require('github-api/dist/components/Repository');

// const RequestGH = new RequestExtended()
index.route('/:username')
    .get(async (request, response) => {
        if (request.isAuthenticated()) {
            // TEST GET REPO 
            // let repo1 = await new Repository('s1/Flancer', 
            // {token: '60a001f915dd6a8d6850d49576351dece3e3eb2c'}, 
            // 'https://git.generalassemb.ly/api/v3')
            // let repo2 = await Github.getRepo('s1', 'Flancer')
            // console.log('REPO:' ,repo1)
            // console.log('REPO:', repo2)

            let profileInfo = {};
            let repos = [];
            if (request.params.username){
            await Github.getUserProfile(request.params.username).then((profile) => {
                // console.log(JSON.stringify(profile))
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
                    // console.log(JSON.stringify(result))
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