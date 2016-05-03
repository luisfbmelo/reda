import assign from 'object-assign';
import { 
	DOMAINS_REQUEST, 
	DOMAINS_SUCCESS,
	DOMAINS_FAILURE
} from '../actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case DOMAINS_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case DOMAINS_SUCCESS:

      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case DOMAINS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
}

