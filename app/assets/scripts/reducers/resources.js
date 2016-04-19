import assign from 'object-assign';
import { 
	HIGHLIGHTS_REQUEST, 
	HIGHLIGHTS_SUCCESS,
	HIGHLIGHTS_FAILURE,
  RESOURCES_REQUEST, 
  RESOURCES_SUCCESS,
  RESOURCES_FAILURE
} from '../actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case HIGHLIGHTS_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case HIGHLIGHTS_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case HIGHLIGHTS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
}

export function resources(state = INITIAL_STATE, action) {
  switch(action.type) {
    case RESOURCES_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case RESOURCES_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case RESOURCES_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
};