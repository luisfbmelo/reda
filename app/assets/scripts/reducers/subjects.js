import assign from 'object-assign';
import { 
	SUBJECTS_REQUEST, 
	SUBJECTS_SUCCESS,
	SUBJECTS_FAILURE
} from '../actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SUBJECTS_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case SUBJECTS_SUCCESS:

      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case SUBJECTS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
}

