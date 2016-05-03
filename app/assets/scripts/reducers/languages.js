import assign from 'object-assign';
import { 
	LANGUAGES_REQUEST, 
	LANGUAGES_SUCCESS,
	LANGUAGES_FAILURE
} from '../actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LANGUAGES_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case LANGUAGES_SUCCESS:

      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case LANGUAGES_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
}

