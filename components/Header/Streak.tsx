import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const FlameStreak = ({
  size = 100,
  outerColor = '#F57C00',
  innerColor = '#FFC107',
  outlineColor = '#FFFFFF',
}) => {
  return (
    <View>
      <Svg height={size} width={size} viewBox="0 0 25 30">
        {/* Outer Flame with White Outline */}
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9697 2.91035C13.2187 1.96348 11.7813 1.96348 11.0303 2.91035L7.26148 7.66176L4.83362 6.36218C4.61346 6.24433 4.1221 6.09629 3.88966 6.05712C2.72329 5.86056 2.04098 6.78497 2.04447 8.03807L2.06814 16.5554C2.02313 16.9355 2 17.322 2 17.7137C2 23.2979 6.70101 27.8248 12.5 27.8248C18.299 27.8248 23 23.2979 23 17.7137C23 15.3518 22.1591 13.1791 20.7498 11.4581L13.9697 2.91035Z"
          stroke={outlineColor} /* White outline */
          strokeWidth="2" /* Outline thickness */
          fill={outerColor} /* Orange fill color */
        />

        {/* Inner Flame (No Outline) */}
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.7198 13.1888C12.0889 12.6861 12.8399 12.6861 13.209 13.1888L15.7324 16.6249C16.5171 17.4048 17 18.4679 17 19.6396C17 22.0329 14.9853 23.973 12.5 23.973C10.0147 23.973 8 22.0329 8 19.6396C8 18.6017 8.37893 17.649 9.01085 16.9029C9.0252 16.8668 9.04457 16.8315 9.06935 16.7978L11.7198 13.1888Z"
          fill={innerColor} /* Yellow fill color */
        />
      </Svg>
    </View>
  );
};

export default FlameStreak;
