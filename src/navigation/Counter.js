import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCounter(counter - 1)}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text>Counter: {counter}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCounter(counter + 1)}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  button: {
    width: 50,
    height: 50,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 26,
  },
});
