import React from 'react'
import { Image, View,StyleSheet, ImageBackground,Dimensions, StatusBar, Text  } from 'react-native';
import { allImages } from '../assets/img/images';
import ReUsableButton from '../reUsables/ReUsableButton';
import {reUseStyles} from'../reUsables/reUseStyles';
const { height, width } = Dimensions.get('window');

const StartingPage = ({navigation}) => {

  const handleSubmit = ()=>{
    console.log('button is clicked');
    navigation.navigate('login')
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white"/>
    <View >
      <Image source={allImages.startPageImg} style={styles.imageBackground} />
        <View style={styles.content}>
            <View style={styles.text}>
              <Text style={reUseStyles.boldText}>Start Cooking</Text>
              <Text style={reUseStyles.regularText}>Let’s join our community to cook better food!</Text>
            </View>
            <ReUsableButton title='Get Started!' bgColor='green' onPress={handleSubmit}/>
        </View>
    </View>
</View>
  )
}

export default StartingPage;

const styles = StyleSheet.create({
  container:{
      flex:1,
      height,
      width,
      justifyContent: 'start',
      alignItems: 'center',
      lineHeight:1.5
  },
  imageBackground:{
      height:400,
      width,
      
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
},
text:{
  width:200,
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  height:100,
  marginBottom:20,
},


})
