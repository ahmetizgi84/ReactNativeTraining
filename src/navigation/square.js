import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const INCREMENT_AMOUNT = 15;

const square = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;

      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;

      default:
        return;
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <ColorCounter
          color="Red"
          onIncrease={() => setColor('red', INCREMENT_AMOUNT)}
          onDecrease={() => setColor('red', -1 * INCREMENT_AMOUNT)}
        />

        <ColorCounter
          color="Green"
          onIncrease={() => setColor('green', INCREMENT_AMOUNT)}
          onDecrease={() => setColor('green', -1 * INCREMENT_AMOUNT)}
        />

        <ColorCounter
          color="Blue"
          onIncrease={() => setColor('blue', INCREMENT_AMOUNT)}
          onDecrease={() => setColor('blue', -1 * INCREMENT_AMOUNT)}
        />
      </View>

      <View style={styles.rgbContainer}>
        <Text>
          {' '}
          ( {red}, {green}, {blue} ){' '}
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

export default square;

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
