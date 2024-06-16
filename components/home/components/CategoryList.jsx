import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryList = (props) => {
    const {data} = props;
    console.log(data);
  return (
    <View>
      <Text>CategoryList</Text>
      {
        data?.map((e,i)=>{
            return <Image source={e} key={i}/>
        })
      }
    </View>
  )
}

export default CategoryList;

const styles = StyleSheet.create({})