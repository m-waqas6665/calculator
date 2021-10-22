import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const Digit_button = props => {

  const handle = () => {
    let ex = props.display;
    isNaN(ex.charAt(ex.length - 1)) ?
      props.setDisplay(ex)
      : props.setDisplay(ex + "" + props.number);
  };

  return (
    <TouchableOpacity onPress={() => { handle() }} style={styles.button}>
      <Text style={styles.text}> {props.number} </Text>
    </TouchableOpacity>
  );
};

const Row = props => {
  // props.setDisplay("123");
  return (
    <View style={styles.row}>
      <Digit_button number={props.number[0]} display={props.display} setDisplay={(val) => props.setDisplay(val)} />
      <Digit_button number={props.number[1]} display={props.display} setDisplay={(val) => props.setDisplay(val)} />
      <Digit_button number={props.number[2]} display={props.display} setDisplay={(val) => props.setDisplay(val)} />
      <Digit_button number={props.number[3]} display={props.display} setDisplay={(val) => props.setDisplay(val)} />
    </View>
  );
};

const OperatorPad = props => {
  return (
    <View style={styles.numericPad}>
      <Row number="+-*/" display={props.display} setDisplay={(val) => props.setDisplay(val)} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#008080',
    borderRadius: 50,
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: 'white',
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

export default OperatorPad;
