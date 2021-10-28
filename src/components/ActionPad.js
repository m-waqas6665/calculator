import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';

import {updateDisplay} from '../actions';
import Button from './Button';

const ActionPad = props => {
  const {updateDisplay, display} = props;

  const clear = () => updateDisplay('');

  const calculate = () => updateDisplay(eval(display));
  return (
    <View style={styles.actionPad}>
      <Button title="C" styles={styles} action={clear} />
      <Button title="=" styles={styles} action={calculate} />
    </View>
  );
};

const mapStateToProps = state => ({
  display: state.calculator.data,
});

const mapDispatchToProps = {
  updateDisplay: updateDisplay,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionPad);

const styles = StyleSheet.create({
  actionPad: {
    top: 100,
    alignItems: 'center',
    flexDirection: 'row',
    width: 410,
  },
  button: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 40,
    flex: 1,
  },
  text: {
    fontSize: 50,
    color: 'black',
  },
});
