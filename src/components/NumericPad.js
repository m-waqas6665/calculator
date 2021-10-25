import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {appendDisplay} from '../actions/index';

const Digit_button = props => {
  const {number, appendDisplay} = props;
  return (
    <TouchableOpacity
      onPress={() => appendDisplay(number)}
      style={styles.button}>
      <Text style={styles.text}> {number} </Text>
    </TouchableOpacity>
  );
};

const Row = props => {
  const {number, appendDisplay} = props;
  return (
    <View style={styles.row}>
      <Digit_button number={number[0]} appendDisplay={appendDisplay} />
      <Digit_button number={number[1]} appendDisplay={appendDisplay} />
      <Digit_button number={number[2]} appendDisplay={appendDisplay} />
    </View>
  );
};

const NumericPad = props => {
  const {appendDisplay} = props;

  return (
    <View style={styles.numericPad}>
      <Row number="123" appendDisplay={appendDisplay} />
      <Row number="456" appendDisplay={appendDisplay} />
      <Row number="789" appendDisplay={appendDisplay} />
      <Row number=".00" appendDisplay={appendDisplay} />
    </View>
  );
};

const mapDispatchToProps = {
  appendDisplay: val => appendDisplay(val),
};
export default connect(null, mapDispatchToProps)(NumericPad);

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 50,
    flex: 1,
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    width: 400,
    height: 120,
  },
  numericPad: {
    top: 50,
    alignItems: 'center',
  },
});
