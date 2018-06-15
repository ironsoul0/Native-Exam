import React from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

const InputContainer = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder=""
        onChangeText={props.nameChangeHandler}
        value={props.placeName}
        style={styles.textInput}
      />
      <Button
        title="Submit"
        onPress={props.submitHandler}
        style={props.handler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    alignItems: 'center'
  },
  textInput: {
    width: "70%",
    marginRight: 20
  }
});

export default InputContainer;