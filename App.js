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

  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity 
} from 'react-native';

import { Container, Header, Content, Button,Icon } from 'native-base';

import PrincipalButton  from './src/Components/elements/PrincipalButton';


//import GradientButton from 'react-native-gradient-buttons';


const App=class App extends React.Component {
  state = {  };
  
  render() {
    return (
      <View style={styles.Container}>
      
       <Image
        style={styles.Logo}
        source={{
          uri: 'https://img1.wsimg.com/isteam/ip/d13a6ddb-2dbe-4333-ae86-2885934529c1/principallogotipo.PNG',
        }}
      />


        
        <TextInput placeholder="correo electrónico o teléfono" textAlign={'center'} 
          style={{ height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

        />
         <TextInput placeholder="contraseña" textAlign={'center'} 
          style={{height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

        />

        <Button  color="#0E8AA9" style={{...styles.ButtonLogin}} title="Login" ><Text style={{alignSelf:"center",fontSize:18,color:"#ffffff"}}>Login</Text></Button>

        
        <TouchableOpacity >
          <Text>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <Button  bordered style={{...styles.CrearcuentaButton}} title="Login" ><Text style={{alignSelf:"center",fontSize:18,color:"#038aa9"}}>Crear cuenta</Text></Button>


          
          <ScrollView>
          <Button iconLeft light>
            <Icon name='arrow-back' />
            <Text>Back</Text>
          </Button>
          <Button iconRight light>
            <Text>Next</Text>
            <Icon name='arrow-forward' />
          </Button>
          <Button iconLeft>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
          <Button iconLeft transparent primary>
            <Icon name='beer' />
            <Text>Pub</Text>
          </Button>
          <Button iconLeft dark>
            <Icon name='cog' />
            <Text>Settings</Text>
          </Button>
          </ScrollView>




        

 
      </View>
    );
  }
}



const styles = StyleSheet.create({

  Logo:{
    width :200,
    height:200
  },
  Container:{
    flex:1,
    fontFamily:"Segoe UI",
    color:'#707070',
    paddingLeft:50,
    paddingRight:50,
    paddingTop:10,
    alignItems:"center"
  


    
  },

  InputLogin:{
    borderColor:"#0E8AA9",
    borderRadius:20,
    fontSize:18,
    marginBottom:30,
    borderWidth:2,
    width:'100%'
  },

  ButtonLogin:{
  borderRadius:20,
  marginBottom:10,
  color:'#0E8AA9',
  backgroundColor:"#0E8AA9",
  width:'100%',
  alignItems:'center',
  flexDirection:"column",
  color:"#ffffff",
 

    },

  CrearcuentaButton:{
    borderWidth:5,
    borderColor:"#0e8aa9",
    borderRadius:20,
    width:'100%',
    alignItems:'center',
  flexDirection:"column",
  marginTop:30,
  marginBottom:30
  },

  redeslogin:{
    
    borderRadius:20,
    width:'100%',
  marginBottom:30,
  justifyContent:'flex-start'
 
  },

  

  Section:{
    flex:1,
    
    paddingLeft:45,
    paddingRight:45
  },
});

export default App;
