import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryItem = (props) => {
    const {text,handlePress,focused} = props
  return (
    <TouchableOpacity style={[styles.container,focused && styles.bgColor]} 
    onPress={()=>{
        handlePress(text.toLowerCase())
    }} 
    >
        <Text style={[styles.text]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem;

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'blue',
        marginLeft:20,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:24,
        paddingRight:24,
        borderRadius:32,
        borderColor:'#D0DBEA',
        borderWidth:2,
    },
    text:{
        color:'#9FA5C0',
        fontWeight:500,
        fontSize:15
    },
    bgColor:{
        backgroundColor:'green'
    }
})