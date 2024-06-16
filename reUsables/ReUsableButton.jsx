import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ReUsableButton = (props) => {
    const {title,bgColor,onPress,color} = props;
    const styles = StyleSheet.create({
        reUsableBtn:{
            backgroundColor:bgColor ?? '1FCC79',
            // padding:10,
            width:300,
            height:50,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:30
        },
        text:{
            color:color ?? 'white',
            fontSize:15
        }
    })
  return (
    <>
        {/* <Button title={title} style={styles.reUsableBtn}/> */}
        <TouchableOpacity style={styles.reUsableBtn} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    </>
  )
}

export default ReUsableButton;

