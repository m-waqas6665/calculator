import * as operation from '../constants/actionTypes/calculator';

export const appendDisplay = value => {
  return {
    type: operation.append,
    value: value,
  };
};

export const updateDisplay = value => {
  return {
    type: operation.update,
    value: value,
  };
};
