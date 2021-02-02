import axios from 'axios'

const API_SERVER = `http://localhost:3000`

export const createProject = (projectDetails) => {
  axios
    .post(`${API_SERVER}/user/createProject`, projectDetails)
    .then((response) => {
      console.log('RESPONSE: ', response);
    })
}


export const login = (credential) => {
  axios.defaults.withCredentials = true
  const request = axios
    .post(`${API_SERVER}/auth/login`, {
      username: credential.username,
      password: credential.password,
      withCredentials: true,
      headers: { crossDomain: true, 'Content-Type': 'application/json' },
    })
    .then(response => response.data);

  return {
    type: 'USER_LOGIN',
    payload: request,
  };
}


export const logout = () => {
  axios
    .get(`${API_SERVER}/auth/logout`)
    .then((response) => {
      console.log('RESPONSE: ', response);
    })
}


export const checkStatus = async () => {
  let profile;
  axios.defaults.withCredentials = true
  await axios.get(`${API_SERVER}`)
    .then((res) => {
      profile = res
    })
  return profile
}

//this axios for get all the users from the server
export const getAllUsers = () => {
  axios
    .get(`${API_SERVER}/find`)
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
    .post(`${API_SERVER}/register`, newUserInfo)
    .then((response) => {
      console.log('RESPONSE: ', response);
      console.log('DATA: ', response.data);
      // HERE IS YOUR LOGIC

    })
    .catch((err) => {
      console.log('ERR: ', err);
    });
};