
// Triggered whenever the user clicks the register submit button
export const REGISTER_SUBMIT = 'core_auth/REGISTER_SUBMIT';
export function registerSubmit(data){
    return {
        type: REGISTER_SUBMIT,
        payload: data
    };
}

// Triggered whenever a register request is dispatched from whenever point in the code
export const REGISTER_REQUEST = 'core_auth/REGISTER_REQUEST';
export function registerRequest(data){
    return {
        type: REGISTER_REQUEST,
        payload: data
    };
}

// triggered when the register has succeded
export const REGISTER_SUCCESS = 'core_auth/REGISTER_SUCCESS';
export function registerSuccess(data){
    return {
        type: REGISTER_SUCCESS,
        payload: data
    };
}

// triggered when the register failed
export const REGISTER_ERROR = 'core_auth/REGISTER_ERROR';
export function registerError(errors){
    return {
        type: LOGIN_ERROR,
        error: true,
        payload: errors
    };
}

// Triggered whenever the user clicks the login submit button
export const LOGIN_SUBMIT = 'core_auth/LOGIN_SUBMIT';
export function loginSubmit(data){
    return {
        type: LOGIN_SUBMIT,
        payload: data
    };
}

// Triggered whenever a login request is dispatched from whenever point in the code
export const LOGIN_REQUEST = 'core_auth/LOGIN_REQUEST';
export function loginRequest(data){
    return {
        type: LOGIN_REQUEST,
        payload: data
    };
}

// triggered when the login has succeded
export const LOGIN_SUCCESS = 'core_auth/LOGIN_SUCCESS';
export function loginSuccess(data){
    return {
        type: LOGIN_SUCCESS,
        payload: data
    };
}

// triggered when the login failed
export const LOGIN_ERROR = 'core_auth/LOGIN_ERROR';
export function loginError(errors){
    return {
        type: LOGIN_ERROR,
        error: true,
        payload: errors
    };
}

// triggered to logout the user
export const LOGOUT = 'core_auth/LOGOUT';
export function logout(){
    return {
        type: LOGOUT
    };
}

export const GET_PROFILE = 'core_auth/GET_PROFILE';
export function getProfile(){
    return {
        type: GET_PROFILE
    };
}

export const GET_PROFILE_SUCCESS = 'core_auth/GET_PROFILE_SUCCESS';
export function getProfileSuccess(data){
    return {
        type: GET_PROFILE_SUCCESS,
        payload: data
    };
}

export const GET_PROFILE_ERROR = 'core_auth/GET_PROFILE_ERROR';
export function getProfileError(errors){
    return {
        type: GET_PROFILE_ERROR,
        error: true,
        payload: errors
    };
}
