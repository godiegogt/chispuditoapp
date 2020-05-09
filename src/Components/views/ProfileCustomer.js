import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import { Container, Header, Content, Button,Icon } from 'native-base';
import {AuthContext} from '../../utils/authContext'

function ProfileCustomer() {

  const { signOut } = React.useContext(AuthContext);

  return(
    <View ><Text>Profile</Text>

    <Button  onPress={signOut} >
         <Text style={{fontSize:18,color:"#ffffff",marginLeft:30}}>Cerrarsesion></Text>
    </Button>

</View>
  )
  
}
const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
      }

});





export default ProfileCustomer;