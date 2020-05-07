/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
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
import auth from '@react-native-firebase/auth';

import { Container, Header, Content, Button,Icon } from 'native-base';

import PrincipalButton  from './src/Components/elements/PrincipalButton';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  Login  from './src/Components/views/Login';

import TapBarCustomer from './src/Components/views/TapBarCustomer';


//import GradientButton from 'react-native-gradient-buttons';
const Stack = createStackNavigator();

const App=class App extends React.Component {

  


  state = { 
    Login:true,
    usertype:1
   };

   renderContent=()=>{
     if (state.Login) {
      <Stack.Screen options={{headerShown: false}} name="TapBarCustomer" component={TapBarCustomer} />
     } else {
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
     }
   }
  
  render() {

      // Set an initializing state whilst Firebase connects

var user=false;


    return (
<NavigationContainer>
      <Stack.Navigator>
  
      {user?(
         <Stack.Screen options={{headerShown: false}} name="TapBarCustomer" component={TapBarCustomer} />

      ):(
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      )

      }
        
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}




export default App;
