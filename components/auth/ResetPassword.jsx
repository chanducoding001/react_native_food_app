import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { reUseStyles } from '../../reUsables/reUseStyles';
import ReUsableInput from '../../reUsables/ReUsableInput';
import AtleastSixComponent from '../../reUsables/AtleastSixComponent';
import ReUsablePwdPage from '../../reUsables/ReUsablePwdPage';
import ReUsableHeadText from '../../reUsables/ReUsableHeadText';

const ResetPassword = ({navigation}) => {

    const onPress = ()=>{
        navigation.navigate('login')
    }
    const boldHeading = 'Reset your password';
    const regularHeading = 'Please enter your new password';
  return (
    <View style={[reUseStyles.container]}>

        {/* <View style={[reUseStyles.makeCenter,styles.wrapOne]}>
        </View> */}
        <ReUsableHeadText boldHeading={boldHeading} regularHeading = {regularHeading}/>
        <View style={[styles.secondWrap]}>
        <ReUsablePwdPage/>
        <AtleastSixComponent btnTitle='Done' btnBgColor='#1FCC79' onPress={onPress}/>
        </View>
    </View>
  )
}

export default ResetPassword;

const styles = StyleSheet.create({
    
    secondWrap:{
        // backgroundColor:'red',
        flex:2,
        display:'flex',
        alignItems:'center'
    }
})