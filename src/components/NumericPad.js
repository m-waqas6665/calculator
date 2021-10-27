import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {appendDisplay} from '../actions';
import Button from './Button';

const NumericPad = props => {
  const {appendDisplay} = props;
  return (
    <View style={styles.numericPad}>
      <Button title="1" styles={styles} setDisplay={appendDisplay} />
      <Button title="2" styles={styles} setDisplay={appendDisplay} />
      <Button title="3" styles={styles} setDisplay={appendDisplay} />
      <Button title="4" styles={styles} setDisplay={appendDisplay} />
      <Button title="5" styles={styles} setDisplay={appendDisplay} />
      <Button title="6" styles={styles} setDisplay={appendDisplay} />
      <Button title="7" styles={styles} setDisplay={appendDisplay} />
      <Button title="8" styles={styles} setDisplay={appendDisplay} />
      <Button title="9" styles={styles} setDisplay={appendDisplay} />
      <Button title="." styles={styles} setDisplay={appendDisplay} />
      <Button title="0" styles={styles} setDisplay={appendDisplay} />
      <Button title="0" styles={styles} setDisplay={appendDisplay} />
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
