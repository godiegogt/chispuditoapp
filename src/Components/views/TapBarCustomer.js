import * as React from 'react';
import { Button, View, TextComponent,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeCustomer from './HomeCustomer';
import OrdersCustomer from './OrdersCustomer';
import ProfileCustomer from './ProfileCustomer';
import auth from '@react-native-firebase/auth';

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Icon name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}
function ProfileIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}



const Tab = createBottomTabNavigator();
function TabBarCustomer({ navigation }) {
 console.log(auth().onAuthStateChanged(user => {user}));
  
    return (
      <Tab.Navigator   
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'HomeCustomer') {
            return (
              <ProfileIconWithBadge
              name={
                focused
                  ? 'smile-o'
                  : 'meh-o'
              }
              size={size}
              color={color}
            />
            );
          } else if (route.name === 'OrdersCustomer') {
            return (
              <Icon
                name={focused ? "rocket" : 'glass'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="HomeCustomer" component={HomeCustomer} />
        <Tab.Screen name="OrdersCustomer" component={OrdersCustomer} />
        <Tab.Screen name="ProfileCustomer" component={ProfileCustomer} />
    </Tab.Navigator>
    );
  }

export default TabBarCustomer;