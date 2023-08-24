import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './components/LoginPage';
import Home from './components/HomePage';
import Timer from './components/TimePage';
import DemoTittle from './components/DemoTittle';
import AllCards from './components/AllCards';
import AllVoiceMemo from './components/AllVoiceMemo';
import AddNotes from './components/AddNotes';
import Loader from './components/Loader';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="loader"
            component={Loader}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Timer" component={Timer} />
          <Stack.Screen
            name="demotittle"
            component={DemoTittle}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Allnotes"
            component={AllCards}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AllVoiceMemo"
            component={AllVoiceMemo}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddNotes"
            component={AddNotes}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
