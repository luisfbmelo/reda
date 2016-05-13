import assign from 'object-assign';
import { 
	YEARS_REQUEST, 
	YEARS_SUCCESS,
	YEARS_FAILURE
} from '../actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case YEARS_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case YEARS_SUCCESS:

      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case YEARS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
}

