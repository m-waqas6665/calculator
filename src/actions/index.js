import * as action from '../constants/actionTypes/calculator';

export const appendDisplay = value => {
  return async dispatch => {
    dispatch({
      type: action.append,
      value: value,
    });
  };
};

export const updateDisplay = value => {
  return async dispatch => {
    dispatch({
      type: action.update,
      value: value,
    });
  };
};
