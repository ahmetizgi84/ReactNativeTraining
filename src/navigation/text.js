import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const text = () => {
  const [txt, setTxt] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={txt}
        onChangeText={(text) => setTxt(text)}
      />

      <View style={styles.textContent}>
        <Text>text: {txt}</Text>
      </View>
    </View>
  );
};

export default text;

const styles = StyleSheet.create({
  input: {
    height: 45,
    margin: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },

  textContent: {
    margin: 15,
    alignItems: 'center',
  },
});
