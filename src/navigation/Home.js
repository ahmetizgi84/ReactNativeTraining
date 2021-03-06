import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{height: 3}}></View>

      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />

      <View style={{height: 3}}></View>

      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />

      <View style={{height: 3}}></View>

      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />

      <View style={{height: 3}}></View>

      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />

      <View style={{height: 3}}></View>

      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />

      <View style={{height: 3}}></View>

      <Button
        title="Go to Square Reducer Demo"
        onPress={() => navigation.navigate('Reducer')}
      />

      <View style={{height: 3}}></View>

      <Button
        title="Go to Text Screen Demo"
        onPress={() => navigation.navigate('Text')}
      />

      <View style={{height: 3}}></View>

      <Button
        title="Go to Box Model Screen Demo"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
