import assign from 'object-assign';
import { 
	SYSTEMS_REQUEST, 
	SYSTEMS_SUCCESS,
	SYSTEMS_FAILURE,
  SYSTEMS_RESET
} from '@/actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null, errorStatus: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SYSTEMS_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case SYSTEMS_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data.result
      })
    case SYSTEMS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message,
        errorStatus: action.status
      })
    case SYSTEMS_RESET:
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

