import assign from 'object-assign';
import { 
	THEMES_REQUEST, 
  THEMES_SUCCESS,
  THEMES_FAILURE,
  THEMES_RESET
} from '@/actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errors: null, isAuthenticated: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case THEMES_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case THEMES_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data.result
      })
    case THEMES_FAILURE:
      return assign({}, state, {
        fetching: false,
        errors: action.errors
      })
    case THEMES_RESET:
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