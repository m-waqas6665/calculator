// export const appendDisplay = () => { type: 'APPEND' }

export const appendDisplay = value => {
  return {
    type: 'APPEND',
    value: value,
  };
};

export const updateDisplay = value => {
  return {
    type: 'UPDATE',
    value: value,
  };
};
