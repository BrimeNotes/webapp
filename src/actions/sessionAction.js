import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
import auth from '../auth/authenticator';

export const authenticationRequest = () => ({
    type: types.REQUEST_AUTHENTICATION
})

export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export const autheticate = ( credentials ) => dispatch => {
  dispatch(authenticationRequest())
  return sessionApi.login(credentials)
  .then( response => response.token)
  .then (jwt => {
    console.log('Response JWt', jwt);
    sessionStorage.setItem('jwt', jwt);
    dispatch(loginSuccess());
  })
}

export function logOutUser() {
  auth.logOut();
  return {type: types.LOG_OUT}
}