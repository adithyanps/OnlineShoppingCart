import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCES,
    authData:authData
  };
} ;

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error:error
  };
};

export const auth = (username,first_name,last_name,email,password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      username:username,
      first_name:first_name,
      last_name:last_name,
      email:email,
      password:password
    }
    axios.post("http://localhost:8000/api/users/",authData)
      .then(response=>{
        console.log(response);
        dispatch(authSuccess(response.data))
      })
      .catch(error=>{
        console.log(error);
        dispatch(authFail(error))
      })
  };
};
