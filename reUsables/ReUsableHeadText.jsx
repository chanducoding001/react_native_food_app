import React from 'react'
import { Text, View } from 'react-native';
import { reUseStyles } from './reUseStyles';

const ReUsableHeadText = (props) => {
    const {boldHeading,regularHeading} = props
  return (
    <View style={[reUseStyles.loginTop,reUseStyles.makeCenter]}>
        <Text style={[reUseStyles.boldText]}>{boldHeading}</Text>
        <Text style={[reUseStyles.regularText]}>{regularHeading}</Text>
    </View>
  )
}

export default ReUsableHeadText;