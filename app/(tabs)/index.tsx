import React, { useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import LessonTree from '@/components/Course/LessonTree';
import UpArrow from '@/components/UpArrow'; // Import UpArrow component

export default function Learning() {
  const scrollViewRef = useRef<ScrollView>(null); // Create a reference to the ScrollView
  const [isVisible, setIsVisible] = useState<boolean>(false); // State to manage UpArrow visibility

  // Function to scroll to the top
  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  // Handle scroll events to toggle UpArrow visibility
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY > 300 && !isVisible) {
      setIsVisible(true);
    } else if (scrollY <= 300 && isVisible) {
      setIsVisible(false);
    }
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Adjust the frequency of scroll events
      >
        <LessonTree />
      </ScrollView>
      {isVisible && <UpArrow onPress={scrollToTop} />}{' '}
      {/* Conditionally render UpArrow */}
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    backgroundColor: '#fff', // Adjust as needed
  },
});
