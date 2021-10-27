import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import NumericPad from './NumericPad';
import OperatorPad from './OperatorsPad';
import ActionPad from './ActionPad';

const Keypad = props => {
  return (
    <View style={styles.keypad}>
      <NumericPad />
      <OperatorPad />
      <ActionPad />
    </View>
  );
};
const styles = StyleSheet.create({
  keypad: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default Keypad;
