import axios from 'axios'

export const API = {
  register: async (newUserInfo) => {
    let message
    await axios
      .post(`/api/register`, newUserInfo)
      .then((response) => message = response.data.message)
      .catch((err) => message = err.split(':')[1]);
    return message
  }
  , updateProfile: async (userID, updates) => {
    let profile
    axios.defaults.withCredentials = true
    await axios.put(`/api/user/${userID}`, updates)
      .then((res) => profile = res)
      .catch((err) => console.log("UDATE PROFILE ERRR:", err))
    return profile
  },
  checkStatus: async () => {
    let profile;
    axios.defaults.withCredentials = true
    await axios.get(`/api`)
      .then((res) => {
        profile = res
      })
    return profile
  },
  login: async (credential) => {
    axios.defaults.withCredentials = true
    const request = axios
      .post(`/api/auth/login`, {
        username: credential.username,
        password: credential.password,
        withCredentials: true,
        headers: { crossDomain: true, 'Content-Type': 'application/json' },
      })
      .then(response => response)
      .catch((err) => "Authentication failed")

    return {
      type: 'USER_LOGIN',
      payload: request,
    };
  },
  logout: async () => {
    let profile
    await axios
      .get(`/api/auth/logout`)
      .then((response) => profile = response)
      .catch((err) => console.log(err))
    return profile
  },
  createProject: async (projectDetails) => {
    axios.defaults.withCredentials = true
    await axios
      .post(`/api/user/createProject`, projectDetails)
      .then((result) => result)
      .catch((err) => err)
  },
  readProject: async (projectID) => {
    axios.defaults.withCredentials = true
    await axios
      .get(`/api/user/project?id=${projectID}`)
      .then((result) => result)
      .catch((err) => err)
  },
  updateProject: async (updates, projectID) => {
    let project
    axios.defaults.withCredentials = true
    await axios
      .put(`/api/user/project/${projectID}`, updates)
      .then((result) => project = result)
      .catch((err) => err)
    return project
  },
  deleteProject: async (projectID) => {
    let project
    axios.defaults.withCredentials = true
    await axios
      .delete(`/api/user/project/${projectID}`)
      .then((result) => project = result)
      .catch((err) => err)
    return project
  },
  postContact: async (values) => {
    let message
    await axios.post(`/api/contact`, values)
      .then((response) => message = response.data)
      .catch((err) => console.log("CONTACT US ERR: ", err));
    return message
  },
  getUserRepos: async () => {
    let repos
    await axios
      .get(`/api/github`)
      .then((result) => repos = result)
      .catch((err) => console.log("GITHUB ERR:", err))
    return repos
  },
  getAllUsers: async () => {
    let users
    axios
      .get(`/api/find`)
      .then((response) => users = response.data)
      .catch((err) => console.log("GET USERS ERR: ", err))
    return users
  }
}