import React, { useState } from 'react'
import ReUsableVerifyOtp from '../../reUsables/ReUsableVerifyOtp';

const VerifyPasswordOtp = ({navigation}) => {
  const [otp,setOtp] = useState('');
  const buttonTitles = {
    verify:'Next',
    sendAgain:'Send again'
  }
  const verifyPasswordOtp = ()=>{
    navigation.navigate('resetPassword')
  }
  const sendAgainVerifyPasswordOtp = ()=>{
    navigation.navigate('login')
  }
  
  return (
      <ReUsableVerifyOtp 
      buttonTitles={buttonTitles}
      verify = {verifyPasswordOtp}
      sendAgain = {sendAgainVerifyPasswordOtp}
      otp={otp}
      setOtp={setOtp}
      />
  )
}

export default VerifyPasswordOtp;