import {
  TOGGLE_MOBILE_MENU_ICON,
  CLOSE_MOBILE_MENU_ICON
} from '../actions/type';

export default function(state = {
  showMobileMenuIcon: true
}, action) {
  switch(action.type) {
    case TOGGLE_MOBILE_MENU_ICON:
      return { ...state, showMobileMenuIcon: !state.showMobileMenuIcon};
    case CLOSE_MOBILE_MENU_ICON:
      return { ...state, showMobileMenuIcon: true};
    default:
      break;
  }

  return state;
}