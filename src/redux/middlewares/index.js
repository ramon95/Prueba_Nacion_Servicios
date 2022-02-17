import { SET_ERROR } from "../actions/type";

export const logActions = (store) => (next) => actionInformation => {
    console.log('Runnign:', actionInformation);
    next(actionInformation);
}

export const reportError = (store) => (next) => (actionInformation) => {
    const { action } = actionInformation;
  
    if (action?.type === SET_ERROR) {
      console.error(action.payload);
    }
  
    next(actionInformation);
  };