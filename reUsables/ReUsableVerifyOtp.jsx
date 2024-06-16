import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OtpTextInput from 'react-native-text-input-otp'
import { reUseStyles } from './reUseStyles';
import ReUsableButton from './ReUsableButton';
import ReUsableHeadText from './ReUsableHeadText';

const ReUsableVerifyOtp = (props) => {
//   const [otp, setOtp] = React.useState('');
    const {otp,setOtp,buttonTitles,verify,sendAgain} = props;
    const boldHeading = 'Check your email';
    const regularHeading = 'We’ve sent the code to your email';

  return (
    <View style={[reUseStyles.container,reUseStyles.loginTop,]}>
        <View style={[styles.wrap,reUseStyles.makeCenter]}>
        <View>
        <ReUsableHeadText boldHeading={boldHeading} regularHeading={regularHeading}/>
        <OtpTextInput 
       otp={ otp }
       setOtp={ setOtp }
       digits={4}
       style={styles.otpStyles}
       fontStyle={{ fontSize: 20, fontWeight: 'bold' }}
       focusedStyle={{ borderColor: '#5cb85c',borderWidth:2 }} 
       
    />
        </View>
        </View>
        <View style={[reUseStyles.bottomHeight,styles.btnWrap,]}>
            <View style={[reUseStyles.spaceEvenly,styles.btnWrapContain]}>
            <Text style={{marginTop:30}}>code expires in: <Text>03:12</Text></Text>
            <ReUsableButton title={buttonTitles?.verify} bgColor='#1FCC79' onPress={verify}/>
            <ReUsableButton title={buttonTitles?.sendAgain} bgColor='#FFFFFF' color='#9FA5C0'onPress={sendAgain}/>
            </View>
        </View>
        
    </View>
  )
}

export default ReUsableVerifyOtp;

const styles = StyleSheet.create({
    wrap:{
        // backgroundColor:'blue',
        flex:1
    },
    btnWrap:{
      flex:2,
      // backgroundColor:'blue'
    },
    btnWrapContain:{
      flex:3/4,
      // backgroundColor:'green'
    },
    otpStyles:{
      borderColor:'#D0DBEA',
      width:70,
      height:70,
      marginTop:30,
      marginLeft:5,
      marginRight:5,
      marginBottom:20,
      padding:5,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#fff',
      borderRadius:10
    }
})