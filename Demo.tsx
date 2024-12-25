import React, { useState, useEffect } from 'react';
import { View, Button, Image, Text, StyleSheet, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomButton } from './components/ui/CustomButton';

interface ImageUploaderProps {
  getImageUri: (base64: any) => void;
}

const ImageUploader = ({ getImageUri }: ImageUploaderProps) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  // Load saved image URI or base64 data on component mount
  useEffect(() => {
    const loadImageData = async () => {
      const savedData = await AsyncStorage.getItem('savedImageUri');
      if (savedData) {
        setImageUri(savedData);
      }
    };
    loadImageData();
  }, []);

  // Function to pick an image
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: Platform.OS === 'web', // Save base64 on web
    });

    if (!result.canceled) {
      if (Platform.OS === 'web') {
        // Save base64 for web
        const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
        saveImage(base64Image);
      } else {
        // Save URI for native
        saveImage(result.assets[0].uri);
      }
    }
  };

  // Save image data (URI or base64) in AsyncStorage
  const saveImage = async (data: any) => {
    try {
      await AsyncStorage.setItem('savedImageUri', data);
      setImageUri(data);
      getImageUri(data);
      console.log('Image saved successfully');
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <CustomButton title="Upload Image" handlePress={pickImage} />
      {imageUri ? (
        <>
          <Text style={styles.text}>Saved Image:</Text>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </>
      ) : (
        <Text style={styles.text}>No image selected</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  image: {
    marginTop: 10,
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ImageUploader;
