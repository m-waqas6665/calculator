import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {updateDisplay} from '../actions/index';
import {connect} from 'react-redux';

const ClearButton = props => {
  const {updateDisplay, number} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        updateDisplay('');
      }}
      style={styles.button}>
      <Text style={styles.text}> {number} </Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = {
  updateDisplay: updateDisplay,
};
export default connect(null, mapDispatchToProps)(ClearButton);

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 40,
    flex: 1,
  },
  text: {
    fontSize: 50,
    color: 'black',
  },
});
