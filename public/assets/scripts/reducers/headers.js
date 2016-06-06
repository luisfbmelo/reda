import assign from 'object-assign';
import { 
	HEADERS_REQUEST, 
	HEADERS_SUCCESS,
	HEADERS_FAILURE
} from '@/actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case HEADERS_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case HEADERS_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case HEADERS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
}