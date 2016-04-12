import { CHANGE_AUTH } from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      //console.log("Authentication: state", state);
      //console.log("Authentication: action.payload", action.payload);
      //console.log("Action:", action);
      return action.payload
  }

  return state;
 }
