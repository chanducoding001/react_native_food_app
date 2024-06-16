import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

const SearchItem = (props) => {
    const {text} = props;
    
  return (
    <TouchableOpacity>
    <View style={[styles.container]}>
      <View style={[styles.item]}>
      <MaterialIcons name='access-time' style={[styles.iconStyles]}/>
      <Text style={[styles.mLeft]}>{text}</Text>
      </View>
      <Feather name='arrow-up-left' style={[styles.iconStyles]}/>
    </View>
    </TouchableOpacity>
  )
}

export default SearchItem;

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        marginTop:20
    },
    item:{
        display:'flex',
        flexDirection:'row',
        width:'90%',
        // backgroundColor:'blue'
        // justifyContent:'space-around'
        
    },
    mLeft:{
        marginLeft:20,
        color:'#3E5481'
    },
    iconStyles:{
        fontSize:20,
        color:'#9FA5C0'
    }
})