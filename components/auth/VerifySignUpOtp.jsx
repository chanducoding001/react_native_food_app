import React, { useState } from 'react'
import ForgotPassword from './ForgotPassword';
import ReUsableVerifyOtp from '../../reUsables/ReUsableVerifyOtp';
import { Text, View } from 'react-native';

const VerifySignUpOtp = ({navigation}) => {
  const [otp,setOtp] = useState('');
  const verifySignUpOtpBtnPress = ()=>{
    console.log('verifySignUpOtpBtnPress');
    navigation.navigate('login');
  }
  const sendAgainSignUpOtpBtnPress = ()=>{
    console.log('sendAgainSignUpOtpBtnPress');
    navigation.navigate('login');
  }
  const buttonTitles = {verify:'Verify',sendAgain:'Send again'};
  
  return (
    // 
    
      <ReUsableVerifyOtp 
      verify={verifySignUpOtpBtnPress}
      sendAgain={sendAgainSignUpOtpBtnPress}
      otp={otp} setOtp={setOtp} 
      buttonTitles={buttonTitles}
      />
   
  )
}

export default VerifySignUpOtp;