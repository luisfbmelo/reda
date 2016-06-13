import assign from 'object-assign';
import { 
	FILTERS_APPS_GET, 
	FILTERS_APPS_SET,
  FILTERS_APPS_RESET
} from '@/actions/action-types';

const INITIAL_STATE = { filters: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FILTERS_APPS_GET:
      return state;
    case FILTERS_APPS_SET:
      return assign({}, state, {
        data: action.filters
      })
    case FILTERS_APPS_RESET:
      return assign({}, state, {
        data: null
      })
    default:
      return state;
  }
}