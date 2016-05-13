import assign from 'object-assign';
import { 
	HIGHLIGHTS_REQUEST, 
	HIGHLIGHTS_SUCCESS,
	HIGHLIGHTS_FAILURE,
  TOGGLE_HIGHLIGHT_RESOURCE,
  RESOURCES_REQUEST, 
  RESOURCES_SUCCESS,
  RESOURCES_FAILURE,
  RESOURCE_REQUEST, 
  RESOURCE_SUCCESS,
  RESOURCE_FAILURE,
  RELATED_RESOURCES_REQUEST, 
  RELATED_RESOURCES_SUCCESS,
  RELATED_RESOURCES_FAILURE
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
    case TOGGLE_HIGHLIGHT_RESOURCE:
      
      // CALL SINGLE RESOURCE REDUCER TO MAKE THE CHANGE
      return assign({}, state, {
        data: state.data.map(item => resource(item, action))
      })

    default:
      return state;
  }
};

export function resource(state = INITIAL_STATE, action) {
  switch(action.type) {
    case RESOURCE_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case RESOURCE_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case RESOURCE_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    case TOGGLE_HIGHLIGHT_RESOURCE:
      if (state.id != action.id){
        return state;
      }

      return assign({}, state, {
        highlight: !state.highlight
      });
    default:
      return state;
  }
};

export function relatedResources(state = INITIAL_STATE, action) {
  switch(action.type) {
    case RELATED_RESOURCES_REQUEST:
      return assign({}, state, {
        fetching: true
      })
    case RELATED_RESOURCES_SUCCESS:
      return assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      })
    case RELATED_RESOURCES_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message
      })
    default:
      return state;
  }
};