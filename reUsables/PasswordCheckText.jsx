import React from 'react'
import { vectorIcons,reUseStyles } from './reUseStyles';
import { StyleSheet, Text, View } from 'react-native';

const PasswordCheckText = () => {
    const checkIcon = vectorIcons({name:'check',type:'SimpleLineIcons'});

  return (
    <View style={[styles.container,reUseStyles.makeCenter]}>
        <View>
            <Text style={[styles.marginBottom]}>Your Password must contain:</Text>
        <View style={[styles.textSpace]}>
            {checkIcon}
            <Text style={[styles.marginLeft]}>Atleast 6 characters</Text>
        </View>
        <View style={[styles.textSpace]}>
            {checkIcon}
            <Text style={styles.marginLeft}>Contains a number</Text>
        </View>
        </View>
    </View>
  )
}

export default PasswordCheckText;

const styles = StyleSheet.create({
    
    textSpace:{
        margin:2,
        width:250,
        display:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        
    },
    marginLeft:{
        marginLeft:20,
        fontSize:15,
        fontWeight:'600'
    },
    marginBottom:{
        marginBottom:5,
        marginLeft:20,
    }
})