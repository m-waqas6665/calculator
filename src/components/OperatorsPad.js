import React from 'react';
import {View, StyleSheet} from 'react-native';
import OperatorButton from './OperatorButton';

const OperatorPad = props => {
  return (
    <View style={styles.operatorPad}>
      <OperatorButton operator="+" />
      <OperatorButton operator="-" />
      <OperatorButton operator="*" />
      <OperatorButton operator="/" />
    </View>
  );
};

export default OperatorPad;

const styles = StyleSheet.create({
  operatorPad: {
    top: 80,
    alignItems: 'center',
    flexDirection: 'row',
    width: 410,
  },
});
