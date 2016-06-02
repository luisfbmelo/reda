import assign from 'object-assign';
import { 
	HIGHLIGHTS_REQUEST, 
	HIGHLIGHTS_SUCCESS,
	HIGHLIGHTS_FAILURE,
  HIGHLIGHTS_RESET,
  TOGGLE_HIGHLIGHT_RESOURCE,
  RESOURCES_REQUEST, 
  RESOURCES_SUCCESS,
  RESOURCES_FAILURE,
  RESOURCES_RESET,
  RESOURCE_REQUEST, 
  RESOURCE_SUCCESS,
  RESOURCE_FAILURE,
  RESOURCE_RESET,
  TOGGLE_FAVORITE_RESOURCE,
  RELATED_RESOURCES_REQUEST, 
  RELATED_RESOURCES_SUCCESS,
  RELATED_RESOURCES_FAILURE,
  RELATED_RESOURCES_RESET
} from '@/actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null, errorStatus: null };

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
        data: action.data.result
      })
    case HIGHLIGHTS_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message,
        errorStatus: action.status
      })  
    case HIGHLIGHTS_RESET:
      return assign({}, state, {
        fetching: false,
        fetched: false,
        data: null,
        errorMessage: null,
        errorStatus: null
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
        curPage: action.data.page,
        total: action.data.total,
        totalPages: action.data.totalPages,
        data: action.data.result
      })
    case RESOURCES_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message,
        errorStatus: action.status
      })
    case RESOURCES_RESET:
      return assign({}, state, {
        fetching: false,
        fetched: false,
        data: null,
        errorMessage: null,
        errorStatus: null
      })
    case TOGGLE_HIGHLIGHT_RESOURCE:
      
      // CALL SINGLE RESOURCE REDUCER TO MAKE THE CHANGE
      return assign({}, state, {
        data: state.data.map(item => resource(item, action))
      })

    case TOGGLE_FAVORITE_RESOURCE:
      
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
        data: action.data.result
      })
    case RESOURCE_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message,
        errorStatus: action.status
      })
    case RESOURCE_RESET:
      return assign({}, state, {
        fetching: false,
        fetched: false,
        data: null,
        errorMessage: null,
        errorStatus: null
      })
    case TOGGLE_HIGHLIGHT_RESOURCE:
      if (state.id != action.id){
        return state;
      }

      return assign({}, state, {
        highlight: !state.highlight
      });
      
    case TOGGLE_FAVORITE_RESOURCE:
      if (state.id != action.id){
        return state;
      }

      return assign({}, state, {
        isFavorite: !state.isFavorite
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
        data: action.data.result
      })
    case RELATED_RESOURCES_FAILURE:
      return assign({}, state, {
        fetching: false,
        errorMessage: action.message,
        errorStatus: action.status
      })
    case RELATED_RESOURCES_RESET:
      return assign({}, state, {
        fetching: false,
        fetched: false,
        data: null,
        errorMessage: null,
        errorStatus: null
      })
    default:
      return state;
  }
};