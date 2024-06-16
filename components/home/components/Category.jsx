import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem';
import { reUseStyles } from '../../../reUsables/reUseStyles';

const Category = (props) => {
    const {items,handlePress,currentCategory} = props; 
    
  return (
    <View style={[styles.container]}>
      <Text style={[reUseStyles.sideText,styles.text]}>Category</Text>
      <View style={[styles.items]}>
      {
        items?.map((e,i)=>{
          let focused;
          if(e.toLowerCase() === 'all' && currentCategory.all){
            focused = true
          }else if(e.toLowerCase() === 'food' && currentCategory.food){
            focused = true
          }else if(e.toLowerCase() === 'drink' && currentCategory.drink){
            focused = true
          }
            return <CategoryItem text={e}
            focused = {focused}
            key={i} handlePress={handlePress} 
            currentCategory={currentCategory}
            />
        })
      }
      </View>
    </View>
  )
}

export default Category;

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'red',
        width:'90%',
        // display:'flex',
        // flexDirection:'row',
    },
    items:{
        display:'flex',
        flexDirection:'row',
        marginTop:10
    },
    text:{
        marginLeft:20
    }
})