import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';

import {appendDisplay} from '../actions';
import Button from './Button';

const NumericPad = props => {
  const {appendDisplay} = props;
  return (
    <View style={styles.numericPad}>
      <Button title="1" styles={styles} action={() => appendDisplay('1')} />
      <Button title="2" styles={styles} action={() => appendDisplay('2')} />
      <Button title="3" styles={styles} action={() => appendDisplay('3')} />
      <Button title="4" styles={styles} action={() => appendDisplay('4')} />
      <Button title="5" styles={styles} action={() => appendDisplay('5')} />
      <Button title="6" styles={styles} action={() => appendDisplay('6')} />
      <Button title="7" styles={styles} action={() => appendDisplay('7')} />
      <Button title="8" styles={styles} action={() => appendDisplay('8')} />
      <Button title="9" styles={styles} action={() => appendDisplay('9')} />
      <Button title="." styles={styles} action={() => appendDisplay('.')} />
      <Button title="0" styles={styles} action={() => appendDisplay('0')} />
      <Button title="" styles={styles} action={() => {}} />
    </View>
  );
};

const mapDispatchToProps = {
  appendDisplay: appendDisplay,
};

export default connect(null, mapDispatchToProps)(NumericPad);

const styles = StyleSheet.create({
  numericPad: {
    top: 70,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 50,
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
});
