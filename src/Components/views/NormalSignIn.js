import { View,Text} from "native-base";
import { StyleSheet,TextInput ,ScrollView} from 'react-native';
import {  Button } from 'native-base';

import * as React from 'react';
import ValidationComponent from 'react-native-form-validator';

import BoxShadow from "../elements/BoxShadow";

/*
function NormalSignIn() {
    
return(
    <View style={{flex:1,padding:20,backgroundColor:'#fff',alignItem:"center"}}>
        <BoxShadow title='Crear cuenta' >

        <TextInput placeholder="Nombre" textAlign={'center'} 
     style={{ height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

   />
    <TextInput placeholder="Apellido" textAlign={'center'} 
     style={{height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

   />
       <TextInput placeholder="Correo electrónico" textAlign={'center'} 
     style={{height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

   />
       <TextInput placeholder="Celular" textAlign={'center'} 
     style={{height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

   />
       <TextInput placeholder="contraseña" textAlign={'center'} 
     style={{height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

   />
          <TextInput placeholder="Repetir contraseña" textAlign={'center'} 
     style={{height: 40, borderColor: '#0E8AA9', borderWidth: 1 ,...styles.InputLogin}}

   />

   <Button onPress={() => signIn({ email, password })}  color="#0E8AA9" style={{...styles.ButtonLogin}} title="Login" ><Text style={{alignSelf:"center",fontSize:18,color:"#ffffff"}}>Login</Text></Button>

   

     
        </BoxShadow>
    </View>
)
}*/

const styles=StyleSheet.create({
    InputLogin:{
        borderColor:"#0E8AA9",
        borderRadius:20,
        fontSize:16,
        marginBottom:15,
        marginTop:15,
        borderWidth:2,
        width:'100%',
        height: 40, 
        textAlign:'center'
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
    
})


class NormalSignIn extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {name:"",email:"",phonenumber:"",Contraseña:"",Contraseña2:"",isValidated:true,messageContraseña:""};
        this._onPressButton = this._onPressButton.bind(this);
        
      }



      _onPressButton() {
        this.setState({
          messageContraseña:""
        });
        // Call ValidationComponent validate method
        this.validate({
          /* name: {minlength:1, maxlength:25, required: true},
          email: {email:true,required:true},
          phonenumber: {phonenumber:true,required:true,minlength:8},
          Contraseña: {password:true,required:true} */
          

        });
       

        if (this.isFormValid()) {
           

          if (this.state.Contraseña==this.state.Contraseña2) {
            //Hacemos el SIgnUp
            console.log(this.state.Contraseña);
            console.log(this.state.Contraseña2);
            //Validar si el correo electrónico y numero de teléfono
            const newUser={
              name:this.state.name,
              password:this.Contraseña,
              phonenumber:this.phonenumber,
              email:this.email
            }

            this.props.navigation.navigate("PhoneValidation",newUser);




            
          } else {

            this.setState({
              messageContraseña:"Las contraseñas no coinciden."
            });
            
          }


          
        }


      }

      _inputValidation(){
        
      }
    render() {
        return (
            <View style={{flex:1,padding:20,backgroundColor:'#fff',alignItem:"center"}}>
               
                <BoxShadow title='Crear cuenta' >
                        <TextInput placeholder="Nombre y Apellido" ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} style={styles.InputLogin} />
                        <TextInput keyboardType='email-address' placeholder="Correo electrónico" ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} style={styles.InputLogin} />
                        <TextInput maxLength={8} keyboardType='numeric' textContentType="telephoneNumber" placeholder="Celular" ref="phonenumber" onChangeText={(phonenumber) => this.setState({phonenumber})} value={this.state.phonenumber}style={styles.InputLogin}  />
                        <TextInput placeholder="Contraseña" ref="contraseña" onChangeText={(Contraseña) => this.setState({Contraseña})} value={this.state.Contraseña}style={styles.InputLogin}  />
                        <TextInput placeholder="Repita la contraseña por favor" ref="Contraseña2" onChangeText={(Contraseña2) => this.setState({Contraseña2})} value={this.state.Contraseña2}style={styles.InputLogin}  />
                        <Button onPress={this._onPressButton}  color="#0E8AA9" style={styles.ButtonLogin} title="Login" ><Text style={{alignSelf:"center",fontSize:18,color:"#ffffff"}}>Login</Text></Button>
                        
                        <Text style={{color:"red"}}>
            {this.getErrorMessages().split("\n")[0]}{this.state.messageContraseña}
          </Text>
          
                </BoxShadow>
                

            </View>
        );
    }
}



export default NormalSignIn;