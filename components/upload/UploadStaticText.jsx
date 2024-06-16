import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { reUseStyles } from '../../reUsables/reUseStyles';
import Ionicons from '@expo/vector-icons/Ionicons';

const UploadStaticText = () => {
  return (
    <View style={[styles.staticText]}>
        <Text style={[reUseStyles.sideText]}>Ingredients</Text>
        <View style={[reUseStyles.sideText,styles.group]}>
            <Ionicons name='add' style={[styles.icon,reUseStyles.sideText]}/>
            <Text style={[reUseStyles.sideText]}>Group</Text>
        </View>
      </View>
  )
}

export default UploadStaticText;

const styles = StyleSheet.create({
    container:{
        marginLeft:30,
        marginRight:30,
        marginTop:10,
    },
    staticText:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    group:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    icon:{
        fontSize:22
    }
})