import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredItem, setenteredItem] = useState('');
  const [allItems, setAllItems] = useState([]);

  const itemInputHandler = (enteredText) => {
    setenteredItem(enteredText);
  };

  const addItemHandler = () => {
    setAllItems(currentItem => [...currentItem, enteredItem]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Item"
          style={styles.input}
          onChangeText={itemInputHandler}
          value={enteredItem}
        />
        <Button title="ADD" onPress={addItemHandler} />
      </View>
      <FlatList data={allItems} renderItem={itemData => (
      <View style={styles.listItem}>
        <Text>{itemData.item}</Text>
      </View>)} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
