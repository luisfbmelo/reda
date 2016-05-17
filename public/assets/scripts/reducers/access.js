import assign from 'object-assign';
import { 
	ACCESS_REQUEST, 
	ACCESS_SUCCESS,
	ACCESS_FAILURE
} from '../actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ACCESS_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case ACCESS_SUCCESS:

      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data.result
      })
    case ACCESS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
}

