import {
  TOGGLE_MOBILE_MENU_ICON,
  CLOSE_MOBILE_MENU_ICON,
  CHANGE_CURRENT_SECTION,
  CREATE_CONTACT_MESSAGE,
  INPUT_CONTACT_MESSAGE
} from './type';

import axios from 'axios';

export function toggleMobileMenuIcon() {
  return {
    type: TOGGLE_MOBILE_MENU_ICON
  }
}

export function closeMobileMenuIcon() {
  return {
    type: CLOSE_MOBILE_MENU_ICON
  }
}

export function changeCurrentSection(section) {
  return {
    type: CHANGE_CURRENT_SECTION,
    payload: section
  }
}

export function createContactMessage(values, callback) {
  const request = axios.post(
    '//formspree.io/anthony.defreitas@gmail.com',
    values
  ).then(() => callback());

  return {
    type: CREATE_CONTACT_MESSAGE,
    payload: request
  };
}

export function inputContactMessage(updatedFormValueObj) {
  return {
    type: INPUT_CONTACT_MESSAGE,
    payload: updatedFormValueObj
  }
}
