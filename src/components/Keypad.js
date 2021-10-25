import React from 'react';
import {View} from 'react-native';
import NumericPad from './NumericPad';
import OperatorPad from './OperatorsPad';
import ActionPad from './ActionPad';

const Keypad = props => {
  return (
    <View>
      <NumericPad />
      <OperatorPad />
      <ActionPad />
    </View>
  );
};

export default Keypad;
