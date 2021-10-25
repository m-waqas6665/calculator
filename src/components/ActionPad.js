import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {updateDisplay} from '../actions/index';
import {connect} from 'react-redux';

const Clear_button = props => {
  const {updateDisplay, number} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        updateDisplay('');
      }}
      style={styles.button}>
      <Text style={styles.text}> {number} </Text>
    </TouchableOpacity>
  );
};
const Equal_button = props => {
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

const Row = props => {
  const {updateDisplay, display, number} = props;
  return (
    <View style={styles.row}>
      <Clear_button
        number={number[0]}
        display={display}
        updateDisplay={val => updateDisplay(val)}
      />
      <Equal_button
        number={number[1]}
        display={display}
        updateDisplay={val => updateDisplay(val)}
      />
    </View>
  );
};

const ActionPad = props => {
  const {updateDisplay, display} = props;
  return (
    <View style={styles.numericPad}>
      <Row number="C=" display={display} updateDisplay={updateDisplay} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    display: state.changeTheDisplay,
  };
};

const mapDispatchToProps = {
  updateDisplay: val => updateDisplay(val),
};
export default connect(mapStateToProps, mapDispatchToProps)(ActionPad);

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
  row: {
    flexDirection: 'row',
    width: 400,
    height: 120,
  },
  numericPad: {
    top: 50,
    alignItems: 'center',
  },
});
