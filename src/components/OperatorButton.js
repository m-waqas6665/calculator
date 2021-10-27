import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {appendDisplay} from '../actions/index';

const OperatorButton = props => {
  const {display, operator, appendDisplay} = props;
  const handle = () => {
    let ex = display;
    if (!isNaN(ex.charAt(ex.length - 1))) {
      appendDisplay(operator);
    }
  };
  return (
    <TouchableOpacity onPress={handle} style={styles.button}>
      <Text style={styles.text}> {operator} </Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => {
  return {
    display: state.calculatorReducer,
  };
};

const mapDispatchToProps = {
  appendDisplay: appendDisplay,
};

export default connect(mapStateToProps, mapDispatchToProps)(OperatorButton);

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#008080',
    borderRadius: 50,
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
});
