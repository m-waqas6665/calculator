import React from 'react';
import {View,Text} from 'react-native';
import NumericPad from './NumericPad';
import OperatorPad from './OperatorsPad';
import ActionPad from './ActionPad';

const Keypad = props => {
  return (
    <View>
      <NumericPad display={props.display} setDisplay={props.setDisplay} />
      <OperatorPad display={props.display} setDisplay={props.setDisplay} />
      <ActionPad display={props.display} setDisplay={props.setDisplay} />
    </View>
  );
};

export default Keypad;
