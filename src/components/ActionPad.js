import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {updateDisplay} from '../actions';
import Button from './Button';

const ActionPad = props => {
  const {updateDisplay, display} = props;
  const calculate = () => {
    let expression = display;
    updateDisplay(eval(expression));
  };
  return (
    <View style={styles.actionPad}>
      <Button title="C" styles={styles} setDisplay={() => updateDisplay('')} />
      <Button title="=" styles={styles} setDisplay={calculate} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    display: state.calculatorReducer,
  };
};

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
