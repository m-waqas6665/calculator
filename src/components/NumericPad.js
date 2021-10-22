import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Digit_button = props => {
  const {setDisplay, display, number} = props;
  return (
    <TouchableOpacity onPress={()=>{setDisplay(display+""+number)}} style={styles.button}>
      <Text style={styles.text}> {number} </Text>
    </TouchableOpacity>
  );
};

const Row = props => {
  const {setDisplay, display, number} = props;
  return (
    <View style={styles.row}>
      <Digit_button number={number[0]} display={display} setDisplay={(val)=>setDisplay(val)} />
      <Digit_button number={number[1]} display={display} setDisplay={(val)=>setDisplay(val)} />
      <Digit_button number={number[2]} display={display} setDisplay={(val)=>setDisplay(val)} />
    </View>
  );
};

const NumericPad = props => {
  const {setDisplay, display} = props;
  return (
    <View style={styles.numericPad}>
      <Row number="123" display={display} setDisplay={(val)=>setDisplay(val)} />
      <Row number="456" display={display} setDisplay={(val)=>setDisplay(val)} />
      <Row number="789" display={display} setDisplay={(val)=>setDisplay(val)} />
      <Row number=".00" display={display} setDisplay={(val)=>setDisplay(val)} />
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
    backgroundColor: 'black',
    borderRadius: 50,
    flex: 1,
  },
  text: {
    fontSize: 30,
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

export default NumericPad;
