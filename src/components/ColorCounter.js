import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text> {color} </Text>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.btn} onPress={() => onDecrease()}>
            <Text style={styles.txt}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.leftMargin]}
            onPress={() => onIncrease()}>
            <Text style={styles.txt}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  content: {
    alignItems: 'center',
  },

  wrapper: {
    flexDirection: 'row',
  },

  btn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292929',
  },

  leftMargin: {
    marginLeft: 5,
  },

  txt: {
    color: 'white',
    fontSize: 20,
  },
});
