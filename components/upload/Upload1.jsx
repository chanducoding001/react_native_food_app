import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UploadPhoto from './UploadPhoto';
import ReUsableInput from '../../reUsables/ReUsableInput';
import ReUsableIconLessInput from '../../reUsables/components/ReUsableIconLessInput';
import { reUseStyles } from '../../reUsables/reUseStyles';
import SelectableRange from './SelectableRange';
import ReUsableButton from '../../reUsables/ReUsableButton';

const Upload1 = ({navigation}) => {

  const handleChange = (name,text)=>{
    console.log(name,text);
  }
  const handlePress = ()=>{
    navigation.navigate('upload2')
  }
  return (
    <View style={[styles.container]}>
      <UploadPhoto/>
      <Text style={[reUseStyles.marginBottom20,reUseStyles.textColor]}>Food name</Text>
      <ReUsableIconLessInput name='foodName' handleChange={handleChange} placeholder='Enter food name'/>
      <Text style={[reUseStyles.marginBottom20,reUseStyles.textColor]}>Description</Text>
      <ReUsableIconLessInput name='description' handleChange={handleChange}
      isMulti={true}
      noOfLines={4}
      placeholder='Tell a little about your food' height={100} borderRadius={10}/>
      <Text style={[reUseStyles.marginBottom20,reUseStyles.textColor]}>
      Cooking Duration (in minutes)
      </Text>
      <SelectableRange style={[{marginTop:20}]}/>
      <ReUsableButton title='Next' bgColor='#1FCC79' color='#FFFFFF' onPress={handlePress}/>
    </View>
  )
}

export default Upload1;

const styles = StyleSheet.create({
  container:{
    margin:30
  }
})