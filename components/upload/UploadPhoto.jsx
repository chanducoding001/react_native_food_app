import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { reUseStyles } from '../../reUsables/reUseStyles';
const UploadPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = async () => {
    // Ask for permission to access the camera roll
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Launch the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Check if the image was not cancelled
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log('Image URI: ', result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity style={[styles.container,reUseStyles.marginBottom20]} onPress={selectImage}>
      <View style={styles.wrapper}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <>
            <Ionicons name='image-outline' style={styles.icon} />
            <View style={styles.textWrapper}>
              <Text style={[styles.text]}>Add Cover Photo</Text>
              <Text style={[styles.text]}>(up to 12 Mb)</Text>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#D0DBEA',
    
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Ensure the image doesn't overflow the container
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Ensure wrapper takes full width of container
  },
  icon: {
    fontSize: 70,
    color: '#9FA5C0',
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text:{
    color:'#3E5481'
  }
});
