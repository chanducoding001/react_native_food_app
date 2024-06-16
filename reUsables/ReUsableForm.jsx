import React from 'react'
import { reUseStyles } from './reUseStyles';
import { StyleSheet, Text, View } from 'react-native';
import ReUsableInput from './ReUsableInput';
import ReUsablePwdPage from './ReUsablePwdPage';

const ReUsableForm = (props) => {
    const {names,handleChange,values} = props;
  return (
    <View style={[reUseStyles.makeCenter,styles.wrapper]}>
          <ReUsableInput handleChange = {handleChange} name={names?.email} value={values?.email}/>
          <ReUsablePwdPage handleChange = {handleChange} name={names?.pwd} value={values?.pwd}/>
    </View>
  )
}

export default ReUsableForm;

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    // backgroundColor:'red'
  }
})