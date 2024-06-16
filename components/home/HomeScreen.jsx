import React, { useState } from 'react'
import {  ScrollView, StyleSheet, View } from 'react-native';
import SearchFilter from './components/SearchFilter';
import Category from './components/Category';
import { allImages } from '../../assets/img/images';
import LinksContainer from './components/LinksContainer';
import ImageComponent from './components/ImageComponent';

const HomeScreen = () => {
  const [data,setData] = useState([...allImages.foodData,...allImages.drinksData]);
  const [currentCategory,setCurrentCategory] = useState({all:true,food:false,drink:false}) 
  const items = ['All','Food','Drink']
  const handlePress = (text)=>{
    if(text === 'all'){
      const allItems = [...allImages.foodData,...allImages.drinksData];
      setCurrentCategory({...currentCategory,all:true,food:false,drink:false})
      setData([...allItems])
    }else if(text === 'food'){
      setCurrentCategory({...currentCategory,all:false,food:true,drink:false})
      setData([...allImages.foodData])
    }else if(text === 'drink'){
      setCurrentCategory({...currentCategory,all:false,food:false,drink:true})
      setData([...allImages.drinksData])
    }
  }
  return (
    <>
    <View style={[styles.wrapper]}>
        <View style={[styles.container]}>
          <SearchFilter/>
          <Category items={items} handlePress={handlePress} currentCategory={currentCategory} />
        </View>
        
        <View style={[styles.items]}>
          <LinksContainer/>
        </View>
       <ScrollView style={[styles.scroller]}>
        <ImageComponent data={data}/>
       </ScrollView>
    </View>
    </>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper:{
    // backgroundColor:'blue',
    // height:'100%'
    flex:1
  },
  scroller:{
    flex:1,
    // width:'100%',
    // backgroundColor:'blue'
  },
  container:{
    display:'flex',
    backgroundColor:'white',
    flexDirection:'column',
    alignItems:'center',
    // height:'100%',
    justifyContent:'center',
    paddingBottom:20,
  },
  items:{
    // backgroundColor:'blue',
    height:50,
    marginTop:10,
  },
  
})