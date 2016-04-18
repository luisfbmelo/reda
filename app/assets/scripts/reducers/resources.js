import { 
	HIGHLIGHTS_REQUEST, 
	HIGHLIGHTS_SUCCESS,
	HIGHLIGHTS_FAILURE
} from '../actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case HIGHLIGHTS_REQUEST:
      return Object.assign({}, state, {
        fetching: true
      })
    case HIGHLIGHTS_SUCCESS:

      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case HIGHLIGHTS_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
}

