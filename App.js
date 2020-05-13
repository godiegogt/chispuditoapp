/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import {AuthContext} from './src/utils/authContext';
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
  Alert,

  TouchableOpacity 
} from 'react-native';
import auth from '@react-native-firebase/auth';

import { Container, Header, Content, Button,Icon } from 'native-base';

import PrincipalButton  from './src/Components/elements/PrincipalButton';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  MenuAuth from './src/Components/views/MenuAuth';

import TapBarCustomer from './src/Components/views/TapBarCustomer';

import Spinner from 'react-native-loading-spinner-overlay';


//import GradientButton from 'react-native-gradient-buttons';
const Stack = createStackNavigator();
/*
const App=class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      user:auth().onAuthStateChanged(use => {this.setState({user:use})}),
      isLoadin:true
    }
    console.log("Usuario en constructor");
    console.log(this.user);
  };
 
 



  UNSAFE_componentWillMount() {
    auth().onAuthStateChanged(user => {
      this.setState({
        user:user
      })

      console.log("---------------App");
      console.log(this.state.user);
      });
  


  
  render() {

      // Set an initializing state whilst Firebase connects




    return (
<NavigationContainer>
      <Stack.Navigator initialRouteName={this.state.user?"TapBarCustomer":"MenuAuth"}>
        {this.state.user?
          <Stack.Screen options={{headerShown: false}} name="MenuAuth" component={MenuAuth} />
          :
          <Stack.Screen options={{headerShown: false}} name="TapBarCustomer" component={TapBarCustomer} />
        }
        
          
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

*/


export default function App(){




  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
// console.info("Mi usuario");
const [initializing, setInitializing] = useState(true);
const [isLoading, setIsLoading] = useState(false);

   function onAuthStateChanged(user) {
    console.log("--userToken--");
    console.log(user);
    console.log("---------");
    if (initializing) setInitializing(false);
    dispatch({ type: 'RESTORE_TOKEN', token: user });
  }

 

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);



  const authContext = React.useMemo(
    () => ({
      signIn: async user => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token}
 
       // console.log(user);
       setIsLoading(true);
        auth().signInWithEmailAndPassword(user.email,user.password).then(g=>{


          
          console.log('Autenticado');
          console.log(g);
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          setIsLoading(false);
          
          //this.props.navigation.navigate('TapBarCustomer');
        }).catch(err=>{
          setIsLoading(false);
      
           console.log(err);
           Alert.alert(
            'Login',
            'Sus datos son incorrectos, por favor verifíquelos e inténtelo de nuevo.',
            [
     
              { text: 'OK', onPress: () => console.log('Ok') }
            ],
            { cancelable: false }
          );
      
        });
        setIsLoading(false);
        
      },
      signOut: async () => {
        auth().signOut();
        console.log("Cerramos sesión");
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  if (isLoading) {
    // We haven't finished checking for the token yet
    return (
      <View style={styles.container}>
        <Spinner
          visible={true}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />

      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
          <NavigationContainer>
          <Stack.Navigator >
            {state.userToken==null?
              <Stack.Screen options={{headerShown: false}} name="MenuAuth" component={MenuAuth} />
              :
              <Stack.Screen options={{headerShown: false}} name="TapBarCustomer" component={TapBarCustomer} />
            }
          </Stack.Navigator>
        </NavigationContainer>
    </AuthContext.Provider>

        );

}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});