import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Searchbar from './components/Searchbar';
import Categories from './components/Categories';
export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Searchbar />
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    paddingTop:50,
    backgroundColor:'#87DBBF'
  },


});
