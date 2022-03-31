import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './SRC/Navigation/Home';
import Profile from './SRC/Navigation/Profile';
import { Provider } from 'react-redux';
import Notification from './SRC/Navigation/Notification';
import Mainstore from './SRC/Redux/Mainstore';

const Stack = createNativeStackNavigator();
const App = ()=>{
  return(
    <Provider store={Mainstore}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
export default App;
