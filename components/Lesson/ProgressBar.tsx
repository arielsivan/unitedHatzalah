import React, { useEffect } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';

export default function ProgressBar ({ 
  progress = 0.3, // Value between 0 and 1
  width = 300,
  height = 20,
  color = '#58CC02', // Duolingo green
  backgroundColor = '#E5E5E5',
  animated = true,
  showPercentage = true
}){
  const animatedWidth = new Animated.Value(0);

  useEffect(() => {
    if (animated) {
      Animated.timing(animatedWidth, {
        toValue: progress,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    } else {
      animatedWidth.setValue(progress);
    }
  }, [progress]);

  const progressWidth = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={[styles.backgroundBar, { backgroundColor }]}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progressWidth,
              backgroundColor: color,
            },
          ]}
        />
      </View>
      {showPercentage && (
        <Text style={styles.percentageText}>
          {Math.round(progress * 100)}%
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backgroundBar: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 10,
  },
  percentageText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4B4B4B',
  },
});