// -m "Adopt Register POST In Client App"

import axios from 'axios'
const API_URI = 'http://localhost:3000'

export const getAllUsers = () => {
  axios
    .get(`${API_URI}/api/find`)
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
      .post(`${API_URI}/api/register`, newUserInfo)
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
    await axios.put(`${API_URI}/api/user/${userID}`, updates)
      .then((res) => {
        profile = res
      })
    return profile
  },
  checkStatus: async () => {
    let profile;
    axios.defaults.withCredentials = true
    await axios.get(`${API_URI}/api`)
      .then((res) => {
        profile = res
      })
    return profile
  },
  login: async (credential) => {
    axios.defaults.withCredentials = true
    const request = axios
      .post(`${API_URI}/api/auth/login`, {
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
  logout: () => {
    axios
      .get(`${API_URI}/api/auth/logout`)
      .then((response) => {
        console.log('RESPONSE: ', response);
      })
      .catch((err) => console.log(err))
  },
  createProject: async (projectDetails) => {
    axios.defaults.withCredentials = true
    await axios
      .post(`${API_URI}/api/user/createProject`, projectDetails)
      .then((result) => result)
      .catch((err) => err)
  },
  readProject: async (projectID) => {
    axios.defaults.withCredentials = true
    await axios
      .get(`${API_URI}/api/user/project?id=${projectID}`)
      .then((result) => result)
      .catch((err) => err)
  },
  updateProject: async (updates, projectID) => {
    let project
    axios.defaults.withCredentials = true
    await axios
      .put(`${API_URI}/api/user/project/${projectID}`, updates)
      .then((result) => project = result)
      .catch((err) => err)
    return project
  },
  deleteProject: async (projectID) => {
    let project
    axios.defaults.withCredentials = true
    await axios
      .delete(`${API_URI}/api/user/project/${projectID}`)
      .then((result) => project = result)
      .catch((err) => err)
    return project
  },
  postContact: async (values) => {
    let message
    await axios.post(`${API_URI}/contact`,
      values)
      .then((response) => {
        message = response.data
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
      return message
  },
  getProfileGH: async (userName) => {
    let profile
    await axios
      .get(`${API_URI}/api/github/`)
      .then((result) => profile = result)
      .catch((err) => {
        console.log("GITHUB ERR:", err)
      })
    return profile
  }
}