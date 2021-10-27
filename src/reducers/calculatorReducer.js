import * as calculatorDisplay from '../constants/actionTypes/calculator';
const intialState = '';

const calculatorReducer = (state = intialState, action) => {
  switch (action.type) {
    case calculatorDisplay.append:
      return state + action.value;
    case calculatorDisplay.update:
      return action.value;
    default:
      return intialState;
  }
};

export default calculatorReducer;
