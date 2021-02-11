import React from 'react';
import {View, Text, FlatList} from 'react-native';

const List = () => {
  return (
    <View>
      <Text>This is List screen</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={friends}
        renderItem={({item}) => {
          // element === { item: {id: 1, name: 'Arkadaş #1'}, index: 0 }
          return <Text>{item.name}</Text>;
        }}
        //keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default List;

const friends = [
  {
    id: 1,
    key: '1',
    name: 'Arkadaş #1',
  },
  {
    id: 2,
    key: '2',
    name: 'Arkadaş #2',
  },
  {
    id: 3,
    key: '3',
    name: 'Arkadaş #3',
  },
  {
    id: 4,
    key: '4',
    name: 'Arkadaş #4',
  },
  {
    id: 5,
    key: '5',
    name: 'Arkadaş #5',
  },
  {
    id: 6,
    key: '6',
    name: 'Arkadaş #6',
  },
  {
    id: 7,
    key: '7',
    name: 'Arkadaş #7',
  },
  {
    id: 8,
    key: '8',
    name: 'Arkadaş #8',
  },
  {
    id: 9,
    key: '9',
    name: 'Arkadaş #9',
  },
];
