import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {updateDisplay} from '../actions/index';
import {connect} from 'react-redux';

const EqualButton = props => {
  const {updateDisplay, display, number} = props;
  const calculate = () => {
    let expression = display;
    updateDisplay(eval(expression));
  };

  return (
    <TouchableOpacity style={styles.button} onPress={calculate}>
      <Text style={styles.text}> {number} </Text>
    </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(EqualButton);

const styles = StyleSheet.create({
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
