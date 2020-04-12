import {postData, getData} from '../request';
import {message} from 'antd';
import {push} from 'connected-react-router'
import {take, put, fork, call, race} from 'redux-saga/effects';
import {
    REGISTER_REQUEST,
    REGISTER_SUBMIT,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUBMIT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    GET_PROFILE
} from '../actions';
import {
    registerRequest,
    registerError,
    registerSuccess,
    loginRequest,
    loginError,
    loginSuccess,
    getProfileSuccess,
    getProfileError,
} from '../actions';

function* handleRegisterSubmit(){
    // run the daemon
    while(true){
        // wait for a register submit
        var {payload} = yield take(REGISTER_SUBMIT);
        // put a register request
        yield put(registerRequest(payload));
        // wait for a response
        var {error, success} = yield race({
            success: take(REGISTER_SUCCESS),
            error: take(REGISTER_ERROR)
        });
        // if not an error, pop the screen
        if(!error){
            const { data } = success.payload

            console.log('register sucess', success)
            message.success('Register successfully!')

            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('expires_in', data.expires_in)
            yield put(push('/app'))
        } else {
            console.log('register error', error)
            message.error('Already registered!')
        }
    }
}

function* handleRegisterRequest(){
    // run the daemon
    while(true){
        try{
            // wait for a register request
            var {payload} = yield take(REGISTER_REQUEST);
            // call the api
            var user = yield call(postData, 'users/', payload, false);
            // call the success
            yield put(registerSuccess(user));
        }catch(e){
            // call the error
            yield put(registerError(e));
        }
    }
}

function* handleLoginSubmit(){
    // run the daemon
    while(true){
        // wait for a login submit
        var {payload} = yield take(LOGIN_SUBMIT);
        // put a login request
        yield put(loginRequest(payload));
        // wait for a response
        var {error, success} = yield race({
            success: take(LOGIN_SUCCESS),
            error: take(LOGIN_ERROR)
        });
        // if not an error, pop the screen
        if(!error){
            const { data } = success.payload

            console.log('login sucess', success)
            message.success('Login successfully!')

            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('expires_in', data.expires_in)
            yield put(push('/app'))
        } else {
            console.log('login error', error)
            message.error('Email and password are not correct!')
        }
    }
}

function* handleLoginRequest(){
    // run the daemon
    while(true){
        try{
            // wait for a login request
            var {payload} = yield take(LOGIN_REQUEST);
            // call the api
            var user = yield call(postData, 'authenticate/', payload, false);
            // call the success
            yield put(loginSuccess(user));
        }catch(e){
            // call the error
            yield put(loginError(e));
        }
    }
}

function* handleGetProfile(){
    // run the daemon
    while(true){
        // wait for a login submit
        yield take(GET_PROFILE);
        // put a login request
        try {
            const profile = yield call(getData, 'users/profile');
            yield put(getProfileSuccess(profile));
            yield put(push('/app'))
        } catch(e) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('expires_in')
            yield put(getProfileError(e));
            yield put(push('/'))
        }
    }
}

export default function* auth(getState){
    yield fork(handleRegisterRequest);
    yield fork(handleRegisterSubmit);
    yield fork(handleLoginRequest);
    yield fork(handleLoginSubmit);
    yield fork(handleGetProfile);
}
