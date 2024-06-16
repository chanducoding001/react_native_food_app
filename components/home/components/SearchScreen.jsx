import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { vectorIcons,searchData, reUseStyles } from '../../../reUsables/reUseStyles';
import ReUsableInput from '../../../reUsables/ReUsableInput';
import SearchFilter from './SearchFilter';

const SearchScreen = () => {
    
  return (
    <View style={reUseStyles.container}>
      <SearchFilter />
    </View>
  )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container:{

    },
    icon:{

    },
    search:{

    }
})