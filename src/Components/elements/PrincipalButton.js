import React from 'react';
import {  StyleSheet,Button,TouchableOpacity,Text  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class PrincipalButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <TouchableOpacity style={styles.button}>
            <LinearGradient colors={['#003192', '#0E8AA9']} style={styles.gradient}>
              <Text style={styles.text}>Gradient Button</Text>
            </LinearGradient>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 5
    },
    button: {
      width: '70%',
      height: 45,
    },
    text: {
      color: 'white',
      fontSize: 16
    }
  });

export default PrincipalButton;