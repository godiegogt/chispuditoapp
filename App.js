/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,

  TouchableOpacity 
} from 'react-native';

import { Container, Header, Content, Button,Icon } from 'native-base';

import PrincipalButton  from './src/Components/elements/PrincipalButton';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  Login  from './src/Components/views/Login';

import TapBarCustomer from './src/Components/views/TapBarCustomer';


//import GradientButton from 'react-native-gradient-buttons';
const Stack = createStackNavigator();

const App=class App extends React.Component {
  state = {  };
  
  render() {
    return (
<NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen options={{headerShown: false}} name="TapBarCustomer" component={TapBarCustomer} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}




export default App;
