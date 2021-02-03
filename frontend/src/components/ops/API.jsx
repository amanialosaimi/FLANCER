import axios from 'axios'

const API_SERVER = `http://localhost:3000`

export const createProject = async (projectDetails) => {
  axios.defaults.withCredentials = true
  await axios
    .post(`${API_SERVER}/user/createProject`, projectDetails)
}


export const login = async (credential) => {
  axios.defaults.withCredentials = true
  const request = axios
    .post(`${API_SERVER}/auth/login`, {
      username: credential.username,
      password: credential.password,
      withCredentials: true,
      headers: { crossDomain: true, 'Content-Type': 'application/json' },
    })
    .then(response => response)
    .catch((err)=> "Authentication failed")

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
    .catch((err) => console.log(err))
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