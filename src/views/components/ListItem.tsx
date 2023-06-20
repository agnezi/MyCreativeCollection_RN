import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  item: {
    id: string;
    title: string;
  };
}

export const ListItem: FunctionComponent<Props> = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'white',
  },
});
