import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomButton } from './CustomButton'; // Adjust the path if necessary
import { Colors } from '@/constants/Colors';

interface UpArrowProps {
  onPress: () => void;
}

export default function UpArrow({ onPress } : UpArrowProps) {
  return (
    <View style={styles.container}>
      <CustomButton
        title="↑" // Using an upward arrow symbol as the button title
        backgroundColor={Colors.blue} // Customize the background color as needed
        color="#fff" // Text (arrow) color
        handlePress={onPress} // Function to handle the press event
        rounded={true} // Makes the button circular
        fontSize={30} // Adjust the font size as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    zIndex: 100,
  },
});
