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
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import GradientButton from 'react-native-gradient-buttons';


const App=class App extends React.Component {
  state = {  };
  
  render() {
    return (
      <View style={styles.Container}>
        <View style={{...styles.Section,...styles.Logo}}>
       <Image
        style={styles.Logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />


        </View >
        <View style={{...styles.Section,backgroundColor:white}}>
        <TextInput placeholder="correo electrónico o teléfono" textAlign={'center'} 
          style={{ height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

        />
         <TextInput placeholder="contraseña" textAlign={'center'} 
          style={{height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

        />

 



   
        </View>
        <View style={styles.Section}>
          
        </View>
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
    color:'#707070'


    
  },

  InputLogin:{
    borderColor:"#0E8AA9",
    borderRadius:20,
    fontSize:14,
    marginBottom:35,
    borderWidth:2
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
