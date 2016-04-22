import assign from 'object-assign';
import { 
	LOGIN_REQUEST, 
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST
} from '../actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errors: null, isAuthenticated: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case LOGIN_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data,
        isAuthenticated: true
      })
    case LOGIN_FAILURE:
      return assign({}, state, {
        fetching: false,
        errors: action.errors
      })
    case LOGOUT_REQUEST:
      return assign({}, state, INITIAL_STATE)
    default:
      return state;
  }
}