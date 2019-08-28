import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const Input = props => {
    const [enteredItem, setenteredItem] = useState('');

    const itemInputHandler = (enteredText) => {
        setenteredItem(enteredText);
      };

    return (
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Item"
          style={styles.input}
          onChangeText={itemInputHandler}
          value={enteredItem}
        />
        <Button title="ADD" onPress={props.onAddItem.bind(this, enteredItem)} />
    </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
      }
})

export default Input;