import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { reUseStyles } from '../../reUsables/reUseStyles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import UploadStaticText from './UploadStaticText';
import ReUsableIconLessInput from '../../reUsables/components/ReUsableIconLessInput';
import EnterIngredient from './EnterIngredient';
const Upload2 = () => {
  return (
    <View style={[styles.container]}>
      <UploadStaticText/>
      <EnterIngredient/>
      <EnterIngredient/>
    </View>
  )
}

export default Upload2;

const styles = StyleSheet.create({
    container:{
        marginLeft:30,
        marginRight:30,
        marginTop:10,
    },
    
    icon:{
        fontSize:22
    }
})