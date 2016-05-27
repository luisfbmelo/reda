import assign from 'object-assign';
import { 
	COMMENTS_REQUEST, 
  COMMENTS_SUCCESS,
  COMMENTS_FAILURE,
  COMMENTS_RESET
} from '@/actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errors: null, isAuthenticated: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case COMMENTS_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case COMMENTS_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data,
        isAuthenticated: true
      })
    case COMMENTS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errors: action.errors
      })
    case COMMENTS_RESET:
      return assign({}, state, {
        fetching: false,
        fetched: false,
        data: null,
        errors: null
      })
    default:
      return state;
  }
}