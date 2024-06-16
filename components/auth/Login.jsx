import React, { useState } from 'react'
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReUsableInput from '../../reUsables/ReUsableInput';
import ReUsablePwdPage from '../../reUsables/ReUsablePwdPage';
import { reUseStyles } from '../../reUsables/reUseStyles';
import ReUsableButton from '../../reUsables/ReUsableButton';
import ReUsableForm from '../../reUsables/ReUsableForm';
import ReUsableHeadText from '../../reUsables/ReUsableHeadText';

function Login({navigation}) {
  const [form,setForm] = useState({email:'',pwd:''});
    const handleChange = (key,value)=>{
      console.log('value',value);
      setForm({...form,[key]:value});
    }
    const handleLogin = ()=>{
      console.log('logging login');
      navigation.navigate('home')
    }
    const handleSignUp = ()=>{
      console.log('logging signup');
      navigation.navigate('signUp')
    }
    const handleForgotPwd = ()=>{
      console.log('clicking forgot pwd');
      navigation.navigate('forgotPassword')
    }
    // console.log(form);
    const boldHeading = 'Welcome Back!';
    const regularHeading = 'Please enter your account here'
  return (
    <View style={[reUseStyles.container]}>
        <ReUsableHeadText boldHeading={boldHeading} regularHeading={regularHeading}/>
        <ReUsableForm handleChange={handleChange} names={{emil:'email',pwd:'pwd'}} values={{form}}/>
        <TouchableOpacity onPress={handleForgotPwd} style={styles.forgotPwdContainer}>
          <Text style={reUseStyles.linkContainer}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={[reUseStyles.bottomHeight]}>
          <View style={[reUseStyles.spaceEvenly,styles.loginSignUp]}>
          <ReUsableButton title='Login' bgColor='#1FCC79' onPress={handleLogin}/>
          <Text style={reUseStyles.regularText}>Or Continue with</Text>
          <ReUsableButton title='Google' bgColor='#FF5842' />
          <View style={styles.bottomContainer}>
            <Text>Dont Have an account?</Text>
            <TouchableOpacity onPress={handleSignUp}>
            <Text style={[reUseStyles.linkContainer]}>Sign up</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>

    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  
  forgotPwdContainer: {
    // marginLeft: 160,
    width:125,
    position:'relative',
    right:-200,
    marginBottom:10,
    marginTop:20,
    // backgroundColor:'green'
  },
  
  topHeight:{
    flex:2,
    // backgroundColor:'red'
  },
  
  loginSignUp:{
    // backgroundColor:'green',
    // flex:2
    height:240
  },
  bottomContainer:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    width:220
  }
})