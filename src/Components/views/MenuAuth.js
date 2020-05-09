import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './Login';
import NormalSignIn from './NormalSignIn';

const Stack = createStackNavigator();


function MenuAuth({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="NormalSignIn" component={NormalSignIn} />
        </Stack.Navigator>
    );
  }

export default MenuAuth;