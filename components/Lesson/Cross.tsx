import Svg, { Path } from 'react-native-svg';
import React from 'react';

export const Cross = ({ size = 100 }) => {
  return (
    <>
      <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
        <Path
          d="M13 1L1 13M1 1l12 12"
          stroke="#AFAFAE"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </>
  );
};
