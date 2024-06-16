import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SingleLink = (props) => {
    const {text,handlePress,focused} = props;

  return (
    <TouchableOpacity onPress={()=>handlePress(text.toLowerCase())} 
    style={[styles.linkContainer,focused ? styles.focusBorder:styles.normalBorder,]}>
        <Text style={[styles.link]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default SingleLink;

const styles = StyleSheet.create({
    focusBorder:{
        borderBottomColor:'#1FCC79',
        // backgroundColor:'blue',
    },
    normalBorder:{
        borderBottomColor:'white',
    },
    linkContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:2,
    },
    link:{
        color:'#3E5481'
    }
});