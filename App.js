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
  Button,
  TouchableOpacity 
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

        <Button borderRadius="4" color="#0E8AA9" style={{...styles.ButtonLogin}} title="Login" />
        
        <TouchableOpacity >
          <Text>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>




        

 
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
    paddingTop:50,
    alignItems:"center"
  


    
  },

  InputLogin:{
    borderColor:"#0E8AA9",
    borderRadius:20,
    fontSize:18,
    marginBottom:35,
    borderWidth:2,
    width:'100%'
  },

  ButtonLogin:{
  borderRadius:20,
  marginBottom:40,
  color:'#0E8AA9',
  backgroundColor:"#0E8AA9",
  width:'100%'

    },

  

  Section:{
    flex:1,
    
    paddingLeft:45,
    paddingRight:45
  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },

  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
