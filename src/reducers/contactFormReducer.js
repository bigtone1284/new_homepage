import { 
  CREATE_CONTACT_MESSAGE,
  INPUT_CONTACT_MESSAGE
} from '../actions/type';

const INITIAL_STATE = {
  name: null,
  email: null,
  message: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case INPUT_CONTACT_MESSAGE:
    let name = action.payload.name,
      value = action.payload.value;
    return { ...state, data: action.payload };
  case CREATE_CONTACT_MESSAGE:
    return { ...state, data: action.payload };
  default:
    return state;
  }
};