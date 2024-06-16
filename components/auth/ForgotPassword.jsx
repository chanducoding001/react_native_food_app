// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { reUseStyles } from '../../reUsables/reUseStyles';
// import OtpTextInput from 'react-native-text-input-otp'
// import ReUsableButton from '../../reUsables/ReUsableButton';

// const ForgotPassword = () => {
//   const [otp, setOtp] = React.useState('');

//   return (
//     <View style={[reUseStyles.container,reUseStyles.loginTop,]}>

//         <View style={[reUseStyles.topHeight,styles.wrap,reUseStyles.makeCenter]}>
//         <Text style={[reUseStyles.boldText]}>Welcome Back!</Text>
//         <Text style={[reUseStyles.regularText]}>Please enter your account here</Text>
//         <View>
//         <OtpTextInput 
//        otp={ otp }
//        setOtp={ setOtp }
//        digits={4}
//        style={styles.otpStyles}
//        fontStyle={{ fontSize: 20, fontWeight: 'bold' }}
//        focusedStyle={{ borderColor: '#5cb85c',borderWidth:2 }} 
       
//     />
//         </View>
//         </View>
//         <View style={[reUseStyles.bottomHeight,styles.btnWrap,]}>
//             <View style={[reUseStyles.spaceEvenly,styles.btnWrapContain]}>
//             <Text>code expires in: <Text>03:12</Text></Text>
//             <ReUsableButton title='Verify' bgColor='#1FCC79'/>
//             <ReUsableButton title='Send again' bgColor='#FFFFFF' color='#9FA5C0'/>
//             </View>
//         </View>
        
//     </View>
//   )
// }

// export default ForgotPassword;

// const styles = StyleSheet.create({
//     wrap:{
//         // backgroundColor:'blue',
//         flex:1
//     },
//     btnWrap:{
//       flex:2,
//       // backgroundColor:'blue'
//     },
//     btnWrapContain:{
//       flex:3/4,
//       // backgroundColor:'green'
//     },
//     otpStyles:{
//       borderColor:'#D0DBEA',
//       width:70,
//       height:70,
//       marginTop:30,
//       marginLeft:5,
//       marginRight:5,
//       marginBottom:20,
//       padding:5,
//       display:'flex',
//       alignItems:'center',
//       justifyContent:'center',
//       backgroundColor: '#fff',
//       borderRadius:10
//     }
// })


import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { reUseStyles } from '../../reUsables/reUseStyles';
import ReUsableInput from '../../reUsables/ReUsableInput';
import ReUsableButton from '../../reUsables/ReUsableButton';
import ReUsableHeadText from '../../reUsables/ReUsableHeadText';

const ForgotPassword = ({navigation}) => {
  
  const onPress = ()=>{
    navigation.navigate('verifyPasswordOtp');
  }
  const boldHeading = 'Welcome!'
  const regularHeading = 'Please enter your account here'
  return (
    <View style={[reUseStyles.container]}>
      <ReUsableHeadText boldHeading={boldHeading} regularHeading={regularHeading}/>
    <View style={[styles.secondWrap,reUseStyles.spaceEvenly]}>
      <ReUsableInput/>
      <ReUsableButton title='Sign In' bgColor='#1FCC79' onPress={onPress}/>
    </View>
    </View>
  )
}

export default ForgotPassword;

const styles = StyleSheet.create({
  wrap:{
    // backgroundColor:'blue',
    flex:2/7
  },
  secondWrap:{
    flex:3/7,
    // backgroundColor:'red'
  }
})