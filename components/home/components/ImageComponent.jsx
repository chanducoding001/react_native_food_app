import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { reUseStyles } from '../../../reUsables/reUseStyles';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const ImageComponent = (props) => {
    const {data} = props;
    // const {profileImg,name,itemImg,itemName,category,time} = data;
    
  return (
    <View style={[styles.wrapper]}>
      {
        data?.map((e,i)=>{
            return <View key={i} style={[styles.container]}>
            <View style={[styles.profileContainer]}>
                <Image source={e.profileImg()} style={[styles.profileImg]}/>
                <Text style={[styles.name]}>{e.name}</Text>
            </View>
            <Image source={e.itemImg()} style={[styles.img]}/>
            <Text style={[reUseStyles.sideText]}>{e.itemName}</Text>
            <View style={[styles.iconContainer]}>
            <AntDesign name='hearto' style={[styles.icon]}/>
            </View>
            <View style={[styles.categoryContainer]}>
            <Text style={[styles.categoryName]}>{e.category}</Text>
            
            <View style={[styles.name,{alignItems:'center',display:'flex',justifyContent:'center'}]}>
            <Octicons name='dot-fill' style={[{color:'red'}]}/>
            </View>
            <Text style={[styles.name,styles.categoryName]}>
                <FontAwesome6 name='greater-than' /> 
                {e.time}
            </Text>
            </View>
            
          </View>
        })
      }
      <View>
        <Image/>
        
      </View>
    </View>
  )
}

export default ImageComponent;

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    container:{
        position:'relative',
        width:'50%',
        paddingLeft:5,
        paddingBottom:5,
        paddingRight:5
    },
    iconContainer:{
        position:'absolute',
        top:40,
        right:10,
        backgroundColor:'rgba(30,130,76,0.5)',
        padding:10,
        borderRadius:16
    },
    icon:{
        color:'white',
        fontSize:22,
    },
    img:{
        height:200,
        width:'100%',
        borderRadius:16
    },
    profileImg:{
        height:30,
        width:30,
        borderRadius:8
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:5
    },
    name:{
        marginLeft:10
    },
    categoryName:{
        color:'#9FA5C0'
    },
    categoryContainer:{
        display:'flex',
        flexDirection:'row',
        // justifyContent:'space-evenly'
    }
})