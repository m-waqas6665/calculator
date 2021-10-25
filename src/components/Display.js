import React from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';

const Display = props => {
  const {display} = props;
  return (
    <TextInput editable={false} id="display" style={styles.display}>
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

const mapStateToProps = state => {
  return {
    display: state.changeTheDisplay,
  };
};

export default connect(mapStateToProps)(Display);
