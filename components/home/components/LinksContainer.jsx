import { StyleSheet,  View } from 'react-native'
import React, { useState } from 'react'
import SingleLink from './SingleLink';

const LinksContainer = () => {
  const [focus,setFocus] = useState({left:true,right:false});
  const handlePress = (text)=>{
    if(text==='left'){
      setFocus({...focus,left:true,right:false})
    }else if(text==='right'){
      setFocus({...focus,right:true,left:false})
    }
  }
  return (
    <View style={[styles.container]}>
      <SingleLink text='Left' handlePress = {handlePress} focused = {focus.left}/>
      <SingleLink text='Right' handlePress = {handlePress} focused = {focus.right}/>
    </View>
  )
}

export default LinksContainer;

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    // backgroundColor:'blue',
    marginBottom:10
  }
})