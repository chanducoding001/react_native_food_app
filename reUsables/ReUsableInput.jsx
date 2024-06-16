import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ReUsableInput = (props) => {
    const [focused,setFocused] = useState(false);
    const {borderColor,handleChange,value,name,icon,placeholder} = props;

    const styles = StyleSheet.create({
      container:{
          // backgroundColor:'blue',
          position:'relative'
      },
      input: {
        width:300,
        height: 50,
        borderRadius:30,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 50,
        paddingRight:20,
        borderColor:borderColor ?? '#D0DBEA',
        backgroundColor:'#F4F5F7'
      },
      iconStyles:{
        position:'absolute',
        top:25,
        left:25,
        fontSize:25,
        color:'#3E5481',
        zIndex:1
    },
      activeBorder:{
          borderColor:'blue'
      }
    });
    const handleFocus = ()=>{
        setFocused(true)
    }
    const handleBlur = ()=>{
        setFocused(false)
    }
  return (
    <View style={styles.container}>
        {icon ? <Text style={styles.iconStyles}>{icon}</Text> : <MaterialCommunityIcons name='email-outline' style={styles.iconStyles}/>}
        <TextInput style={[styles.input, focused && styles.activeBorder]} 
        placeholder={placeholder ?? 'Enter Email or phone number'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={(text)=>handleChange(name,text)}
        value={value}
        />
    </View>
  )
}

export default ReUsableInput;

