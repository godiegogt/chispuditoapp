import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './Login';
import NormalSignIn from './NormalSignIn';
import PhoneValidation from './PhoneValidation';

const Stack = createStackNavigator();


function MenuAuth({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: true,headerTitle:"Crear cuenta"}} name="NormalSignIn" component={NormalSignIn} />
            <Stack.Screen options={{headerShown: true}} name="PhoneValidation" component={PhoneValidation} />
        </Stack.Navigator>
    );
  }

export default MenuAuth;