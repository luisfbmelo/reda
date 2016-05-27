import assign from 'object-assign';
import { 
	TERMSANDCONDITIONS_REQUEST, 
	TERMSANDCONDITIONS_SUCCESS,
	TERMSANDCONDITIONS_FAILURE
} from '@/actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null, errorStatus: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TERMSANDCONDITIONS_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case TERMSANDCONDITIONS_SUCCESS:

      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case TERMSANDCONDITIONS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message,
        errorStatus: action.status
      })
    default:
      return state;
  }
}

