

import React, { useState, useEffect } from 'react';
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

import { Container, Header, Content, Button,Icon } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../../utils/authContext'
/*
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user:{}, email:"",password:"",spinner:false,navigation:props.navigation,
    signIn:React.useContext(AuthContext).signIn };
  };
  componentDidMount(){

  }

Login(){

  this.setState({
    spinner:true
  });

  var user={
    email:this.state.email,
    password:this.state.password
  };
  console.log(user);
  auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(g=>{
    this.setState({
      spinner:false
    })
    console.log(g);

    
    this.props.navigation.navigate('TapBarCustomer');
  }).catch(err=>{

    this.setState({
      spinner:false
    })
    console.log(err);

  });

};


  setEmail(email){
    console.log("Cambiado");
    this.setState({
email:email
    });

  };

  setPassword(password){
    
    this.setState({
      password:password
          });

  };

  render() {
    return (

      <View style={styles.Container}>
      <Spinner
                visible={this.state.spinner}
                textContent={'Cargando...'}
                textStyle={styles.spinnerTextStyle}
              />

    <Image
     style={styles.Logo}
     source={{
       uri: 'https://img1.wsimg.com/isteam/ip/d13a6ddb-2dbe-4333-ae86-2885934529c1/principallogotipo.PNG',
     }}
   />


     
     <TextInput onChangeText={email => this.setEmail(email)} placeholder="correo electrónico o teléfono" textAlign={'center'} 
       style={{ height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

     />
      <TextInput onChangeText={password => this.setPassword(password)} placeholder="contraseña" textAlign={'center'} 
       style={{height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

     />

     <Button onPress={this.signIn({email:this.state.email,password:this.state.password})}  color="#0E8AA9" style={{...styles.ButtonLogin}} title="Login" ><Text style={{alignSelf:"center",fontSize:18,color:"#ffffff"}}>Login</Text></Button>

     
     <TouchableOpacity >
       <Text>¿Olvidaste tu contraseña?</Text>
     </TouchableOpacity>
     <Button onPress={()=>{this.props.navigation.navigate('SignIn');}}  bordered style={{...styles.CrearcuentaButton}} title="Login" ><Text style={{alignSelf:"center",fontSize:18,color:"#038aa9"}}>Crear cuenta</Text></Button>

     <Button iconLeft style={{...styles.redeslogin}}>
       <Text style={{fontSize:18,color:"#ffffff",marginLeft:30}}>Continuar con facebook</Text>
     </Button>

     <Button   style={{...styles.ButtonGoogle}} title="Continuar con Google" >
         <Text style={{fontSize:18,color:"#ffffff",marginLeft:30}}>Continuar con Google</Text>
     </Button>

   </View>
      
    );
  }
}*/

function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const { signIn } = React.useContext(AuthContext);

  function Login(user){

    setLoading(true);
    signIn(user);

  }

  return(
    <View style={styles.Container}>
          <Spinner
            visible={isLoading}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
        />

  <Image
   style={styles.Logo}
   source={{
     uri: 'https://img1.wsimg.com/isteam/ip/d13a6ddb-2dbe-4333-ae86-2885934529c1/principallogotipo.PNG',
   }}
 />


   
   <TextInput value={email}  onChangeText={setEmail} placeholder="correo electrónico o teléfono" textAlign={'center'} 
     style={{ height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

   />
    <TextInput value={password} onChangeText={setPassword} placeholder="contraseña" textAlign={'center'} 
     style={{height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

   />

   <Button onPress={() => Login({ email, password })}  color="#0E8AA9" style={{...styles.ButtonLogin}} title="Login" ><Text style={{alignSelf:"center",fontSize:18,color:"#ffffff"}}>Login</Text></Button>

   
   <TouchableOpacity >
     <Text>¿Olvidaste tu contraseña?</Text>
   </TouchableOpacity>
   <Button onPress={()=>{props.navigation.navigate('SignIn');}}  bordered style={{...styles.CrearcuentaButton}} title="Login" ><Text style={{alignSelf:"center",fontSize:18,color:"#038aa9"}}>Crear cuenta</Text></Button>

   <Button iconLeft style={{...styles.redeslogin}}>
     <Text style={{fontSize:18,color:"#ffffff",marginLeft:30}}>Continuar con facebook</Text>
   </Button>

   <Button   style={{...styles.ButtonGoogle}} title="Continuar con Google" >
       <Text style={{fontSize:18,color:"#ffffff",marginLeft:30}}>Continuar con Google</Text>
   </Button>

 </View>
  )
  
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
         alignItems:"center",
         backgroundColor:'#ffffff'
       
     
     
         
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
       ButtonGoogle:{
         borderRadius:20,
         marginBottom:10,
         color:'#000000',
         backgroundColor:'#EB4335',
         width:'100%',
         alignItems:'center',
         flexDirection:"column",
         color:"#ffffff",
        
       
           },
     
       
     
       Section:{
         flex:1,
         
         paddingLeft:45,
         paddingRight:45
       },
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

     export default Login;