import assign from 'object-assign';
import { 
	CATEGORIES_REQUEST, 
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILURE,
  CATEGORIES_RESET
} from '@/actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errors: null, isAuthenticated: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CATEGORIES_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case CATEGORIES_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data.result
      })
    case CATEGORIES_FAILURE:
      return assign({}, state, {
        fetching: false,
        errors: action.errors
      })
    case CATEGORIES_RESET:
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