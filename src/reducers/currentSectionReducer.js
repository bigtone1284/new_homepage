import {
  CHANGE_CURRENT_SECTION
} from '../actions/type';

export default function(state = {
  currentSection: window.location.pathname.split('/')[1] || 'Home'
}, action) {
  switch(action.type) {
    case CHANGE_CURRENT_SECTION:
      return { ...state, currentSection: action.payload};
    default:
      break;
  }

  return state;
}