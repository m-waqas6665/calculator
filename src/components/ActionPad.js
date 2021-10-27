import React from 'react';
import {View, StyleSheet} from 'react-native';
import EqualButton from './EqualButton';
import ClearButton from './ClearButton';

const ActionPad = props => {
  const {display} = props;
  return (
    <View style={styles.actionPad}>
      <ClearButton number="C" display={display} />
      <EqualButton number="=" display={display} />
    </View>
  );
};

export default ActionPad;

const styles = StyleSheet.create({
  actionPad: {
    top: 100,
    alignItems: 'center',
    flexDirection: 'row',
    width: 410,
  },
});
