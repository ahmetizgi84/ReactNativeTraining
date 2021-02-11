import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Home';
import ListScreen from './List';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
