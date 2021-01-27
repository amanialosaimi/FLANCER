const GitHub = require('github-api')

class GitHubExtended extends GitHub {

    /**
     * Github: Get User Repos
     */

    async getUserRepos(userName) {
        let data
        await this.getUser(userName).listRepos()
            .then((response) => {
                data = response.data
            })
            .catch((err) => {
                data = {
                    status: err.response.status,
                    err: err.response.statusText
                }
            })
        return data
    }

    /**
     * Github: Get User Profile
    */

    async getUserProfile(userName) {
        let userProfile
        await this.getUser(userName).getProfile()
            .then((result) => {
                userProfile = result.data
            })
            .catch((err) => {
                data = {
                    status: err.response.status,
                    err: err.response.statusText
                }
            })
        return userProfile
    }

    /**
     * Github: Search
     */

    // await gh.search({ q: 'nextcloud' }).forUsers()
    //     .then((result) => {
    //         if (result) {
    //             response.json(result.data)
    //             return result.data[0]
    //         }
    //     })
    //     .then((firstResult) => {
    //         gh.getUser(firstResult.login).listRepos()
    //             .then((result) => {
    //                 return result.data
    //             })
    //             .then((repos) => {
    //                 repos.map((repo) => {
    //                     console.log(repo.name)
    //                 })
    //             })
    //     })
    //     .catch((err) => {
    //         response
    //             .status(err.response.status)
    //             .json({
    //                 status: err.response.status,
    //                 err: err.response.statusText
    //             })
    //     })

}

module.exports = GitHubExtended
