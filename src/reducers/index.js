import { combineReducers } from 'redux';
import mobileMenuReducer from './mobileMenuReducer';
import currentSectionReducer from './currentSectionReducer';
import { reducer as formReducer } from 'redux-form';
import contactFormReducer from './contactFormReducer';

const rootReducer = combineReducers({
  mobileMenu: mobileMenuReducer,
  currentSection: currentSectionReducer,
  contactForm: contactFormReducer,
  form: formReducer
});

export default rootReducer;
