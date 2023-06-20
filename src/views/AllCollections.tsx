import React, {FunctionComponent} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {ListItem} from './components/ListItem';

const styles = StyleSheet.create({
  screenContainer: {
    position: 'relative',
  },
  background: {
    position: 'absolute',
    backgroundColor: 'red',
    width: '100%',
    height: 200,
    borderBottomRightRadius: 24,
    borderTopLeftRadius: 24,
  },
});

export const AllCollections: FunctionComponent = () => {
  const data = [
    {id: '1', title: 'Naruto'},
    {id: '2', title: 'Yu yu hakusho'},
    {id: '3', title: 'Boruto'},
    {id: '4', title: 'Boruto'},
    {id: '5', title: 'Boruto'},
    {id: '6', title: 'Boruto'},
    {id: '7', title: 'Boruto'},
    {id: '8', title: 'Boruto'},
    {id: '9', title: 'Boruto'},
    {id: '10', title: 'Boruto'},
  ];

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.background} />
      <FlatList data={data} renderItem={({item}) => <ListItem item={item} />} />
    </SafeAreaView>
  );
};
