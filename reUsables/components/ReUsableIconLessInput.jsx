import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { reUseStyles } from '../reUseStyles';

const ReUsableIconLessInput = (props) => {

    const {height,width,borderRadius,placeholder,noOfLines,handleChange,name,isMulti} = props;
    const styles = StyleSheet.create({
        textInput:{
            width:width ?? 300,
            height: height ?? 56,
            borderColor:'#D0DBEA',
            borderWidth:1,
            borderRadius:borderRadius ?? 30,
            paddingLeft:20,
            paddingRight:20,
            color:'#9FA5C0',
            marginBottom:reUseStyles.marginBottom20.marginBottom
            // marginLeft:'auto',
            // marginRight:'auto'
        }
    })
  return (
    <View>
      <TextInput onChangeText={(text)=>handleChange(name,text)}
       name={name} placeholder={placeholder} 
       multiline={isMulti}
       noOfLines={noOfLines ?? 1}
       style={[styles.textInput]}
       />
    </View>
  )
}

export default ReUsableIconLessInput;

