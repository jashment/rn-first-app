import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Item from './components/Item';
import Input from './components/Input';
import { getWorldAlignment } from 'expo/build/AR';

export default function App() {
  const [allItems, setAllItems] = useState([]);

  const addItemHandler = itemTitle => {
    setAllItems(currentItem => [
      ...currentItem, 
      { key: Math.random().toString(), 
        value: itemTitle
      }
    ]);
  };

  const removeItemHandler = itemKey => {
    setAllItems(currentItems => {
      return currentItems.filter((item) => item.key !== itemKey);
    })
  }

  return (
    <View style={styles.screen}>
      <Input onAddItem={addItemHandler} />
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
