import axios from 'axios'
<<<<<<< HEAD
const API_URI = 'http://localhost:3000'
=======
>>>>>>> Release-v2.3.2
export const getAllUsers = () => {
  axios
    .get(`/api/find`)
    .then((response) => {
      console.log("RESPONSE: ", response);
      console.log("DATA: ", response.data);
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
};

export const API = {
  register: async (newUserInfo) => {
    let message
    await axios
      .post(`/api/register`, newUserInfo)
      .then((response) => {
        message = response.data.message
      })
      .catch((err) => {
        message = err.split(':')[1]
      });
    return message
  }
  , updateProfile: async (userID, updates) => {
    let profile
    axios.defaults.withCredentials = true
    await axios.put(`/api/user/${userID}`, updates)
      .then((res) => {
        profile = res
      })
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
<<<<<<< HEAD
      .get(`${API_URI}/api/auth/logout`)
=======
      .get(`/api/auth/logout`)
>>>>>>> Release-v2.3.2
      .then((response) => {
        profile = response
      })
      .catch((err) => console.log(err))
    return profile
<<<<<<< HEAD
    
=======

>>>>>>> Release-v2.3.2
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
<<<<<<< HEAD
    await axios.post(`${API_URI}/api/contact`,
=======
    await axios.post(`/api/contact`,
>>>>>>> Release-v2.3.2
      values)
      .then((response) => {
        message = response.data
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
    return message
  },
<<<<<<< HEAD
  getProfileGH: async (username) => {
    let profile
    await axios
      .get(`${API_URI}/api/github/${username}`)
      .then((result) => profile = result)
=======
  getUserRepos: async () => {
    let repos
    await axios
      .get(`/api/github`)
      .then((result) => repos = result)
>>>>>>> Release-v2.3.2
      .catch((err) => {
        console.log("GITHUB ERR:", err)
      })
    return repos
  }
}