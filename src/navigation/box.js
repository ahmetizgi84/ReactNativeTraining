import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const boxModel = () => {
  return (
    <View>
      <Text>Box Model </Text>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Child #1</Text>
      </View>

      <Text>Flex Box Model </Text>
      <View style={styles.viewStyleFlex}>
        <Text style={styles.textStyleFlex}>Child #1</Text>
        <Text style={styles.textStyleFlex}>Child #2</Text>
        <Text style={styles.textStyleFlex}>Child #3</Text>
      </View>

      <Text>Flex Values </Text>
      <View style={styles.viewStyleFlexValue}>
        <Text style={styles.textStyleFlexValue1}>Child #1</Text>
        <Text style={styles.textStyleFlexValue2}>Child #2</Text>
        <Text style={styles.textStyleFlexValue3}>Child #3</Text>
      </View>
    </View>
  );
};

export default boxModel;

const styles = StyleSheet.create({
  viewStyle: {
    margin: 15,
    borderWidth: 3,
    borderColor: 'black',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    margin: 20,
  },

  viewStyleFlex: {
    margin: 15,
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'stretch', //'flex-end', 'center', 'baseline', 'flex-start',
    flexDirection: 'row-reverse', //'row', 'column-reverse', 'column',
    justifyContent: 'space-evenly', //'space-between', //'space-around', //'flex-start', //'flex-end', //'center',
  },

  textStyleFlex: {
    borderWidth: 3,
    borderColor: 'red',
  },

  viewStyleFlexValue: {
    margin: 15,
    height: 300,
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'stretch', //'flex-end', 'center', 'baseline', 'flex-start',
    //flexDirection: 'row-reverse', //'row', 'column-reverse', 'column',
    //justifyContent: 'space-evenly', //'space-between', //'space-around', //'flex-start', //'flex-end', //'center',
  },

  textStyleFlexValue1: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red',
  },
  textStyleFlexValue2: {
    flex: 2,
    borderWidth: 3,
    borderColor: 'red',
  },
  textStyleFlexValue3: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red',
  },
});
