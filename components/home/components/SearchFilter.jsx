import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { vectorIcons,searchData, reUseStyles } from '../../../reUsables/reUseStyles';
import ReUsableInput from '../../../reUsables/ReUsableInput';
import SearchItem from './SearchItem';

const SearchFilter = () => {
    const [input,setInput] = useState('');
    const searchIcon = vectorIcons({name:'search'});
    const handleChange = (name,text)=>{
        setInput(text);
    }
    
  return (
    <View style={[styles.container]}>
      <ReUsableInput icon={searchIcon} handleChange={handleChange} name='input' placeholder='Search'/>
      <FlatList data={searchData} renderItem={({item})=>{
        if(item.name.toLowerCase().includes(input.toLowerCase()) && input ){
            return <View style={[reUseStyles.makeCenter]}>
            <SearchItem text={item.name} />
        </View>
        }
      }} 
      />
    </View>
  )
}

export default SearchFilter;

const styles = StyleSheet.create({
  container:{
    display:'flex',
    // backgroundColor:'yellow',
    // flexDirection:'column',
    alignItems:'center',
    height:70,
    // justifyContent:'center'
  }
})