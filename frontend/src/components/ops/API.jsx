import axios from 'axios'
const API = 'http://localhost:3000'
export const createProject = async (projectDetails) => {
  axios.defaults.withCredentials = true
  await axios
    .post(`${API}/api/user/createProject`, projectDetails)
    .then((result) => result)
    .catch((err) => err)
}

export const readProject = async (projectID) => {
  axios.defaults.withCredentials = true
  await axios
    .get(`${API}/api/user/project?id=${projectID}`)
    .then((result) => result)
    .catch((err) => err)
}

export const updateProject = async (projectID, updates) => {
  axios.defaults.withCredentials = true
  await axios
    .put(`${API}/api/user/project?id=${projectID}`, updates)
    .then((result) => result)
    .catch((err) => err)
}

export const deleteProject = async (projectID) => {
  axios.defaults.withCredentials = true
  await axios
    .delete(`${API}/api/user/project?id=${projectID}`,projectID)
    .then((result) => result)
    .catch((err) => err)
}

export const login = async (credential) => {
  axios.defaults.withCredentials = true
  const request = axios
    .post(`${API}/api/auth/login`, {
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
}


export const logout = () => {
  axios
    .get(`${API}/api/auth/logout`)
    .then((response) => {
      console.log('RESPONSE: ', response);
    })
    .catch((err) => console.log(err))
}


export const checkStatus = async () => {
  let profile;
  axios.defaults.withCredentials = true
  await axios.get(`${API}/api`)
    .then((res) => {
      profile = res
    })
  return profile
}

export const updateProfile = async (userID, updates) => {
  let profile
  axios.defaults.withCredentials = true
  await axios.put(`${API}/api/user/${userID}`, updates)
    .then((res) => {
      profile = res
    })
  return profile
}

//this axios for get all the users from the server
export const getAllUsers = () => {
  axios
    .get(`${API}/api/find`)
    .then((response) => {
      console.log("RESPONSE: ", response);
      console.log("DATA: ", response.data);
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
};

//this for new user
export const register = (newUserInfo = { username: "demo", password: "demo" }) => {
  console.log('send API POST ');
  axios
    .post(`${API}/api/register`, newUserInfo)
    .then((response) => {
      console.log('RESPONSE: ', response);
      console.log('DATA: ', response.data);
      // HERE IS YOUR LOGIC

    })
    .catch((err) => {
      console.log('ERR: ', err);
    });
};