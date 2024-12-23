import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomButton } from './CustomButton'; // Adjust the path if necessary

interface UpArrowProps {
  onPress: () => void;
}

const UpArrow: React.FC<UpArrowProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <CustomButton
        title="↑" // Using an upward arrow symbol as the button title
        backgroundColor="#3498db" // Customize the background color as needed
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

export default UpArrow;
