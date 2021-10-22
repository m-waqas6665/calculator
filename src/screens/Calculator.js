import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Display from '../components/Display';
import Keypad from '../components/Keypad';
const Calculator = () => {
  const [display, setDisplay] = useState('678');
  return (
    <View style={styles.cal}>
      <Display value={display} />
      <Keypad display={display} setDisplay={setDisplay} />
    </View>
  );
};

const styles = StyleSheet.create({
  cal: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default Calculator;
