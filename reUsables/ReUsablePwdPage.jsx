import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';

const ReUsablePwdPage = (props) => {
    const {handleChange,name,value} = props
  const [showPwd, setShowPwd] = useState(false);
  const [focus,setFocus] = useState(false);
  const handleFocus = ()=>{
    setFocus(true)
  }
  const handleBlur = ()=>{
    setFocus(false);
  }
  return (
    <View style={pwdStyles.container}>
      <SimpleLineIcons name='lock' style={pwdStyles.iconStyles} />
      <TextInput
        placeholder='Enter Password'
        secureTextEntry={!showPwd}
        style={[pwdStyles.input,focus && pwdStyles.activeBorder]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={(text)=>{handleChange(name,text)}}
        value={value}
      />
      <TouchableOpacity onPress={() => setShowPwd(!showPwd)} style={pwdStyles.pwdIconContainer}>
        <Feather name={showPwd ? 'eye' : 'eye-off'} style={pwdStyles.pwdIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default ReUsablePwdPage;

const pwdStyles = StyleSheet.create({
  pwdIconContainer: {
    position: 'absolute',
    right: 30,
    top: 25,
  },
  pwdIcon: {
    fontSize: 25,
  },
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
  borderColor:'#D0DBEA',
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
