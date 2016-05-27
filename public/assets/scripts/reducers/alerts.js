import assign from 'object-assign';
import { 
	ALERT_ADD, 
  ALERT_REMOVE
} from '@/actions/action-types';

const INITIAL_STATE = { message: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ALERT_ADD:
      return assign({}, state, {
        message: action.message,
        resultType: action.resultType
      })
    case ALERT_REMOVE:
      return assign({}, state, {
        message: null,
        resultType: null
      })
    default:
      return state;
  }
}