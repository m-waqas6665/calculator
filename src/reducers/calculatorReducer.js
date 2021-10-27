import * as operation from '../constants/actionTypes/calculatorReducer/calculatorReducer';
const intialState = '';

const calculatorReducer = (state = intialState, action) => {
  switch (action.type) {
    case operation.append:
      return state + action.value;
    case operation.update:
      return action.value;
    default:
      return intialState;
  }
};

export default calculatorReducer;
