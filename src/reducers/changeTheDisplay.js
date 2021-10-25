const intialState = '';

const changeTheDisplay = (state = intialState, action) => {
  switch (action.type) {
    case 'APPEND':
      return state + action.value;
    case 'UPDATE':
      return action.value;
    default:
      return intialState;
  }
};

export default changeTheDisplay;
