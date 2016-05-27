import assign from 'object-assign';
import { 
	FILTERS_GET, 
	FILTERS_SET,
  FILTERS_RESET
} from '@/actions/action-types';

const INITIAL_STATE = { filters: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FILTERS_GET:
      return state;
    case FILTERS_SET:
      return assign({}, state, {
        filters: action.filters
      })
    case FILTERS_RESET:
      return assign({}, state, {
        filters: null
      })
    default:
      return state;
  }
}