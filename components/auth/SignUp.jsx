import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ReUsableForm from '../../reUsables/ReUsableForm'
import { reUseStyles } from '../../reUsables/reUseStyles';
import AtleastSixComponent from '../../reUsables/AtleastSixComponent';
import ReUsableHeadText from '../../reUsables/ReUsableHeadText';

const SignUp = ({navigation}) => {
  const [form,setForm] = useState({email:'',pwd:''});
  const handleChange = (key,value)=>{
    console.log('sign up values',value);
  }
  const onPress = ()=>{
    console.log('sign up btn is clicked');
    navigation.navigate('verifySignUpOtp');
  }
  const boldHeading = 'Welcome!';
  const regularHeading = 'Please enter your account here';
  return (
    <View style={[reUseStyles.container]}>
      <ReUsableHeadText boldHeading={boldHeading} regularHeading={regularHeading}/>
    <ReUsableForm handleChange={handleChange} names={{emil:'email',pwd:'pwd'}} values={{form}}/>
    <View style={reUseStyles.bottomHeight}>
    <AtleastSixComponent 
    btnTitle='Sign Up' btnBgColor='#1FCC79'
    onPress={onPress}/>
    </View>
    </View>
  )
}

export default SignUp