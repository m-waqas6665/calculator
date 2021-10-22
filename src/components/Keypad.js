import React from 'react';
import {View} from 'react-native';
import NumericPad from './NumericPad';
import OperatorPad from './OperatorsPad';
import ActionPad from './ActionPad';

const Keypad = props => {
  const {display, setDisplay} = props;
  return (
    <View>
      <NumericPad display={display} setDisplay={setDisplay} />
      <OperatorPad display={display} setDisplay={setDisplay} />
      <ActionPad display={display} setDisplay={setDisplay} />
    </View>
  );
};

export default Keypad;
