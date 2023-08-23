import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './components/LoginPage';
import Home from './components/HomePage';
import Timer from './components/TimePage';
import DemoTittle from './components/DemoTittle';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="timer" component={Timer} />
          <Stack.Screen name="demotittle" component={DemoTittle} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
