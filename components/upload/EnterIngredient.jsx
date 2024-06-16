import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReUsableIconLessInput from '../../reUsables/components/ReUsableIconLessInput';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { reUseStyles } from '../../reUsables/reUseStyles';

const EnterIngredient = () => {
  return (
    <View style={[styles.container]}>
        <MaterialCommunityIcons name='drag' style={[styles.iconStyles]}/>
        <ReUsableIconLessInput placeholder='Enter ingredient '/>
      </View>
  )
}

export default EnterIngredient;

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    iconStyles:{
        fontSize:40,
        height:60,
        // backgroundColor:'blue',
        width:35,
    }
})