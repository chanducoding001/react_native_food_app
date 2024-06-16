import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import PasswordCheckText from './PasswordCheckText';
import ReUsableButton from './ReUsableButton';
import { reUseStyles } from './reUseStyles';

const AtleastSixComponent = (props) => {
    const {pwdFocus,onPress,btnTitle,btnBgColor} = props

  return (
    <View style={[styles.container]}>
        {pwdFocus  && <PasswordCheckText/>}
        <PasswordCheckText/>
        <ReUsableButton title={btnTitle} bgColor={btnBgColor} onPress={onPress}/>
    </View>
  )
}

export default AtleastSixComponent;

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'blue',
        height:200,
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center'
    }
})
