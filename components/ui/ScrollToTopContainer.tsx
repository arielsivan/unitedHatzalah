import React, { ReactNode, useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import UpArrow from '@/components/ui/UpArrow';

interface ScrollToTopContainerProps {
  children: ReactNode;
}

/**
 * ScrollToTopContainer component provides a scrollable container that displays a button
 * to scroll back to the top when the user has scrolled down a certain distance.
 *
 * @param {ScrollToTopContainerProps} props - The properties for the ScrollToTopContainer component.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the scrollable container.
 *
 * @returns {JSX.Element} The rendered ScrollToTopContainer component.
 */
export default function ScrollToTopContainer({ children }: ScrollToTopContainerProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setIsVisible(scrollY > 300);
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {children}
      </ScrollView>
      {isVisible && <UpArrow onPress={scrollToTop} />}
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
});
