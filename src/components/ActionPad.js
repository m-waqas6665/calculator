import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Clear_button = props => {
  const {setDisplay, number} = props;
  return (
    <TouchableOpacity onPress = {() => {setDisplay('')}} style={styles.button}>
      <Text style={styles.text}> {number} </Text>
    </TouchableOpacity>
  );
};
const Equal_button = props => {
  const {setDisplay, display, number} = props;
  const calculate = () => {
    let expression = display;
    setDisplay(eval(expression));
  };

  return (
    <TouchableOpacity style={styles.button} onPress={calculate}>
      <Text style={styles.text}> {number} </Text>
    </TouchableOpacity>
  );
};

const Row = props => {
  const {setDisplay, display, number} = props;
  return (
    <View style={styles.row}>
      <Clear_button number={number[0]} display={display} setDisplay={(val)=>setDisplay(val)} />
      <Equal_button number={number[1]} display={display} setDisplay={(val)=>setDisplay(val)} />
    </View>
  );
};

const ActionPad = props => {
  const {setDisplay, display} = props;
  return (
    <View style={styles.numericPad}>
      <Row number="C=" display={display} setDisplay={setDisplay} />
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

export default ActionPad;
