import * as actions from '../constants/actionTypes/calculator';
const intialState = {
  data: '',
};

const calculator = (state = intialState, action) => {
  switch (action.type) {
    case actions.append:
      return {...state, data: state.data + action.value};
    case actions.update:
      return {...state, data: action.value};
    default:
      return state;
  }
};

export default calculator;
