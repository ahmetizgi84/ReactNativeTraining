import React, {useReducer} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'INCREMENT' || 'DECREMENT', payload: 1 }

  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + action.payload};

    case 'DECREMENT':
      return state.count - action.payload < 0
        ? state
        : {...state, count: state.count - action.payload};

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const {count} = state;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({type: 'DECREMENT', payload: 1})}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>

      <Text>Counter: {count}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({type: 'INCREMENT', payload: 1})}>
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
