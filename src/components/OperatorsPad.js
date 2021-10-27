import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {appendDisplay} from '../actions';
import Button from './Button';

const OperatorPad = props => {
  const {appendDisplay, display} = props;

  const handle = title => {
    let ex = display;
    if (!isNaN(ex.charAt(ex.length - 1))) {
      appendDisplay(title);
    }
  };
  return (
    <View style={styles.operatorPad}>
      <Button title="+" styles={styles} setDisplay={handle} />
      <Button title="-" styles={styles} setDisplay={handle} />
      <Button title="*" styles={styles} setDisplay={handle} />
      <Button title="/" styles={styles} setDisplay={handle} />
    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(OperatorPad);

const styles = StyleSheet.create({
  operatorPad: {
    top: 80,
    alignItems: 'center',
    flexDirection: 'row',
    width: 410,
  },
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
