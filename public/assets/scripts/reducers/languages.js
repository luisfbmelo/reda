import assign from 'object-assign';
import { 
	LANGUAGES_REQUEST, 
	LANGUAGES_SUCCESS,
	LANGUAGES_FAILURE,
  LANGUAGES_RESET
} from '@/actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null, errorStatus: null };

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
        data: action.data.result
      })
    case LANGUAGES_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message,
        errorStatus: action.status
      })
    case LANGUAGES_RESET:
      return assign({}, state, {
        fetching: false,
        fetched: false,
        data: null,
        errorMessage: null,
        errorStatus: null
      })
    default:
      return state;
  }
}

