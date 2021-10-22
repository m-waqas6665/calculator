import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Digit_button = props => {
  const {setDisplay, display, number} = props;
  const handle = () => {
    let ex = display;
    if (!isNaN(ex.charAt(ex.length - 1))) {
      ex = ex + '' + number;
    }
    setDisplay(ex);
  };

  return (
    <TouchableOpacity onPress={handle} style={styles.button}>
      <Text style={styles.text}> {number} </Text>
    </TouchableOpacity>
  );
};

const Row = props => {
  const {setDisplay, display, number} = props;
  return (
    <View style={styles.row}>
      <Digit_button number={number[0]} display={display} setDisplay={setDisplay} />
      <Digit_button number={number[1]} display={display} setDisplay={setDisplay} />
      <Digit_button number={number[2]} display={display} setDisplay={setDisplay} />
      <Digit_button number={number[3]} display={display} setDisplay={setDisplay} />
    </View>
  );
};

const OperatorPad = props => {
  const {setDisplay, display} = props;
  return (
    <View style={styles.numericPad}>
      <Row number="+-*/" display={display} setDisplay={setDisplay} />
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
