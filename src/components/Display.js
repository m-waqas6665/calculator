import React from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';

const Display = props => {
  const {value} = props;
  return (
    <TextInput editable={false} id="display" style={styles.display}>
      <Text style={styles.text}> {value} </Text>
    </TextInput>
  );
};

const styles = StyleSheet.create({
  display: {
    top: 50,
    borderWidth: 5,
    borderColor: 'black',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    width: 400,
    height: 150,
    borderRadius: 15,
    backgroundColor: 'grey',
    marginBottom: 15,
  },

  text: {
    fontSize: 60,
    color: 'black',
  },
});

export default Display;
