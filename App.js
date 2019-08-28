import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Item from './components/Item';
import Input from './components/Input';
import { getWorldAlignment } from 'expo/build/AR';

export default function App() {
  const [allItems, setAllItems] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addItemHandler = itemTitle => {
    setAllItems(currentItem => [
      ...currentItem, 
      { key: Math.random().toString(), 
        value: itemTitle
      }
    ]);
    setAddMode(false)
  };

  const removeItemHandler = itemKey => {
    setAllItems(currentItems => {
      return currentItems.filter((item) => item.key !== itemKey);
    })
  }

  const cancelAddItemHandler = () => {
    setAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Item" onPress={() => setAddMode(true)} />
      <Input visible={addMode} onAddItem={addItemHandler} onCancel={cancelAddItemHandler} />
      <FlatList 
        keyExtractor={
          (item, index) => item.key
        } 
        data={allItems} 
        renderItem={
          itemData => 
          <Item title={itemData.item.value} id={itemData.item.key} onDelete={removeItemHandler} />
        } />
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
