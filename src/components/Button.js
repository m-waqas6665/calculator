import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = props => {
  const {title, action, styles} = props;
  return (
    <TouchableOpacity onPress={() => action(title)} style={styles.button}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
};

export default Button;
