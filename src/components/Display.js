import React from 'react';
import {connect} from 'react-redux';
import {Text, StyleSheet, TextInput} from 'react-native';

const Display = props => {
  const {display} = props;
  return (
    <TextInput editable={false} style={styles.display}>
      <Text style={styles.text}> {display} </Text>
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

const mapStateToProps = state => ({
  display: state.calculator.data,
});

export default connect(mapStateToProps, null)(Display);
