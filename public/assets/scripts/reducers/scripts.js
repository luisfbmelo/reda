import assign from 'object-assign';
import { 
	SCRIPTS_REQUEST, 
	SCRIPTS_SUCCESS,
	SCRIPTS_FAILURE,
  SCRIPTS_RESET
} from '@/actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null, errorStatus: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SCRIPTS_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case SCRIPTS_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data.result
      })
    case SCRIPTS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message,
        errorStatus: action.status
      })
    case SCRIPTS_RESET:
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

