import assign from 'object-assign';
import { 
	USER_REQUEST, 
	USER_SUCCESS,
	USER_FAILURE
} from '../actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null, errorStatus: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case USER_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case USER_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message,
        errorStatus: action.status
      })
    default:
      return state;
  }
}

