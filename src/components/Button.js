import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = props => {
  const {title, setDisplay, styles} = props;
  return (
    <TouchableOpacity onPress={() => setDisplay(title)} style={styles.button}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
};

export default Button;
