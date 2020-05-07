import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import { Container, Header, Content, Button,Icon } from 'native-base';

class ProfileCustomer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            navigation:props.navigation,
            user:{}
        }
    }
 
    componentDidMount(){

    };

Logout(){

    auth().onAuthStateChanged(user => {
        this.setState({
          user:user
        })
  
        console.log("---------------Este es el usuario que se encuentra logueado-----");
        console.log(this.state.user);
        });

    console.log("---------------Cerraremos sesión----");
    this.setState({
        spinner:true
      })
    auth()
    .signOut()
    .then((g) => {
        

        this.setState({
            spinner:false,


          });
          console.log(g);

          auth().onAuthStateChanged(user => {
            this.setState({
              user:user
            })
      
            console.log("---------------Profile");
            console.log(this.state.user);
            });


          this.props.navigation.navigate('Login');


    }).catch((err) =>{

        this.setState({
            spinner:false
          });
          console.log(err);
          this.props.navigation.navigate('Login');

    });
    
}

    render() {
        return (
            <View ><Text>Profile</Text>
                <Spinner
                visible={this.state.spinner}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
              />
                <Button  onPress={() => this.Logout()} >
                     <Text style={{fontSize:18,color:"#ffffff",marginLeft:30}}>Cerrarsesion></Text>
                </Button>
            
            </View>


        );
    }
}
const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
      }

});

export default ProfileCustomer;