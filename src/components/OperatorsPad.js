import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {appendDisplay} from '../actions/index';
const Digit_button = props => {
  const {display, number, appendDisplay} = props;
  const handle = () => {
    let ex = display;
    if (!isNaN(ex.charAt(ex.length - 1))) {
      appendDisplay(number);
    }
  };
  return (
    <TouchableOpacity onPress={handle} style={styles.button}>
      <Text style={styles.text}> {number} </Text>
    </TouchableOpacity>
  );
};

const Row = props => {
  const {display, number, appendDisplay} = props;
  return (
    <View style={styles.row}>
      <Digit_button
        number={number[0]}
        display={display}
        appendDisplay={appendDisplay}
      />
      <Digit_button
        number={number[1]}
        display={display}
        appendDisplay={appendDisplay}
      />
      <Digit_button
        number={number[2]}
        display={display}
        appendDisplay={appendDisplay}
      />
      <Digit_button
        number={number[3]}
        display={display}
        appendDisplay={appendDisplay}
      />
    </View>
  );
};

const OperatorPad = props => {
  const {display, appendDisplay} = props;
  return (
    <View style={styles.numericPad}>
      <Row number="+-*/" display={display} appendDisplay={appendDisplay} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    display: state.changeTheDisplay,
  };
};

const mapDispatchToProps = {
  appendDisplay: val => appendDisplay(val),
};

export default connect(mapStateToProps, mapDispatchToProps)(OperatorPad);

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
