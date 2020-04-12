
import {combineReducers} from 'redux';
import {createBrowserHistory} from 'history'
import {connectRouter} from 'connected-react-router';
import {
  GET_PROFILE_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions';

export const history = createBrowserHistory();

function users(state = {}, action){
    if(!action) return state;
    
    switch(action.type){
        case GET_PROFILE_SUCCESS:
            return {
              ...state,
              ...action.payload.data
            };
        default:
            return state;
    }
}

function auth(state = null, action){
  if(!action) return state;
  
  switch(action.type){
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return action.payload.data;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  router: connectRouter(history),
  users,
  auth
});
