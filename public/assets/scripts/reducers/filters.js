import assign from 'object-assign';
import { 
	FILTERS_REQUEST, 
	FILTERS_SUCCESS,
	FILTERS_FAILURE
} from '../actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FILTERS_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case FILTERS_SUCCESS:

      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case FILTERS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
}