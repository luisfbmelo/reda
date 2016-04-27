import assign from 'object-assign';
import { 
	CONFIG_REQUEST, 
	CONFIG_SUCCESS,
	CONFIG_FAILURE
} from '../actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CONFIG_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case CONFIG_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case CONFIG_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
}