import {StyleSheet, ShadowPropTypesIOS ,View,Text} from 'react-native';
import React from 'react';

export default function BoxShadow(props) {

    return(
        <View style={styles.BoxShadow}>
            <Text style={{fontWeight:'bold', fontSize:22,color:'#727272',marginBottom:20}}>{props.title}</Text>
            {props.children}
            
        </View>
    )
    
}

const styles = StyleSheet.create({
    
BoxShadow:{
    marginTop:30,
    backgroundColor:"#fff",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.35,
shadowRadius: 0,
borderRadius:15,
elevation: 5,
    padding:30
}
  });

