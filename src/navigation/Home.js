import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is home screen</Text>
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />

      <View style={{height: 10}}></View>

      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
