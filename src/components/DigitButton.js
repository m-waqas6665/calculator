import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {appendDisplay} from '../actions/index';

const DigitButton = props => {
  const {number, appendDisplay} = props;
  return (
    <TouchableOpacity
      onPress={() => appendDisplay(number)}
      style={styles.button}>
      <Text style={styles.text}> {number} </Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = {
  appendDisplay: appendDisplay,
};

export default connect(null, mapDispatchToProps)(DigitButton);

const styles = StyleSheet.create({
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
