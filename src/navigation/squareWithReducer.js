import React, {useReducer} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const INCREMENT_AMOUNT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue' }
  // action === { type: 'CHANGE_RED' || 'CHANGE_GREEN' || 'CHANGE_BLUE' }

  switch (action.colorToChange) {
    case 'red':
      // never going to modify state directly
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {...state, red: state.red + action.amount};

    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : {...state, green: state.green + action.amount};

    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {...state, blue: state.blue + action.amount};

    default:
      return state;
  }
};

const squareWithReducer = () => {
  // dispatch -> run my reducer
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;

  return (
    <View>
      <View style={styles.container}>
        <ColorCounter
          color="Red"
          onIncrease={() =>
            dispatch({colorToChange: 'red', amount: INCREMENT_AMOUNT})
          }
          onDecrease={() =>
            dispatch({colorToChange: 'red', amount: -1 * INCREMENT_AMOUNT})
          }
        />

        <ColorCounter
          color="Green"
          onIncrease={() =>
            dispatch({colorToChange: 'green', amount: INCREMENT_AMOUNT})
          }
          onDecrease={() =>
            dispatch({colorToChange: 'green', amount: -1 * INCREMENT_AMOUNT})
          }
        />

        <ColorCounter
          color="Blue"
          onIncrease={() =>
            dispatch({colorToChange: 'blue', amount: INCREMENT_AMOUNT})
          }
          onDecrease={() =>
            dispatch({colorToChange: 'blue', amount: -1 * INCREMENT_AMOUNT})
          }
        />
      </View>

      <View style={styles.rgbContainer}>
        <Text>
          ( {red}, {green}, {blue} )
        </Text>
      </View>

      <View
        style={[
          styles.colorContainer,
          {backgroundColor: `rgb(${red}, ${green}, ${blue})`},
        ]}
      />
    </View>
  );
};

export default squareWithReducer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rgbContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  colorContainer: {
    width: '100%',
    height: 150,
  },
});
