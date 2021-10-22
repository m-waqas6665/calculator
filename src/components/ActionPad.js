import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';


const Clear_button = props => {
  return (
    <TouchableOpacity onPress={()=>{props.setDisplay('')}} style={styles.button}>
      <Text style={styles.text}> {props.number} </Text>
    </TouchableOpacity>
  );
};
const Equal_button = props => {

  const calculate= ()=>{
    let expression = props.display;
    //expression = 'a' + expression + 'b';
    props.setDisplay(eval(expression));
 }

  return (
    <TouchableOpacity style={styles.button} onPress={()=>{calculate()}}>
      <Text style={styles.text}> {props.number} </Text>
    </TouchableOpacity>
  );
};

const Row = props => {
  // props.setDisplay("123");
  return (
    <View style={styles.row}>
      <Clear_button number={props.number[0]} display={props.display} setDisplay={(val)=>props.setDisplay(val)} />
      <Equal_button number={props.number[1]} display={props.display} setDisplay={(val)=>props.setDisplay(val)} />
    </View>
  );
};

const ActionPad = props => {
  return (
    <View style={styles.numericPad}>
      <Row number="C=" display={props.display} setDisplay={(val)=>props.setDisplay(val)} />
    </View>
  );
};

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

export default ActionPad;
