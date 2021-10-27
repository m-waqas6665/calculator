import React from 'react';
import {View, StyleSheet} from 'react-native';
import DigitButton from './DigitButton';

const NumericPad = () => {
  return (
    <View style={styles.numericPad}>
      <DigitButton number="1" />
      <DigitButton number="2" />
      <DigitButton number="3" />
      <DigitButton number="4" />
      <DigitButton number="5" />
      <DigitButton number="6" />
      <DigitButton number="7" />
      <DigitButton number="8" />
      <DigitButton number="9" />
      <DigitButton number="." />
      <DigitButton number="0" />
      <DigitButton number="0" />
    </View>
  );
};

export default NumericPad;

const styles = StyleSheet.create({
  numericPad: {
    top: 70,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
