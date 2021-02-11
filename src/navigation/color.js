import React, {useState} from 'react';
import {Button, StyleSheet, FlatList, View} from 'react-native';

const Color = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Random Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({item}) => {
          return (
            <View style={{width: 100, height: 100, backgroundColor: item}} />
          );
        }}
      />
    </View>
  );
};

export default Color;

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});