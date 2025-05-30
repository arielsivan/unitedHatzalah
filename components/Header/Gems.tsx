import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

const DiamondIcon = ({
  size = 100, // Default size for the icon
  strokeColor = '#FFFFFF', // Default stroke color
  fillColor = '#53ADF0', // Default fill color
}) => {
  return (
    <View>
      <Svg width={size} height={(size * 30) / 24} viewBox="0 0 24 30">
        <G stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <G transform="translate(1.000000, 1.000000)" fillRule="nonzero">
            <Path
              d="M2.12,5.36 L8.595,1.452 C9.9891922,0.61047923 11.7348078,0.61047923 13.129,1.452 L19.604,5.359 C20.9201138,6.15339332 21.7243996,7.57872448 21.7240001,9.116 L21.7240001,18.782 C21.7240001,20.3189192 20.9198086,21.7437908 19.604,22.538 L13.129,26.445 C11.7348078,27.2865208 9.9891922,27.2865208 8.595,26.445 L2.12,22.538 C0.804191377,21.7437908 0,20.3189192 0,18.782 L0,9.116 C0,7.578 0.804,6.154 2.12,5.359 L2.12,5.36 Z"
              stroke={strokeColor}
              strokeWidth={2}
              fill={fillColor}
            />
            <Path
              d="M10.89,5.273 L10.89,8.438 C10.89,8.816 10.692,9.166 10.37,9.362 L7.422,11.145 C7.05578595,11.3664376 6.59336378,11.350749 6.243,11.105 L3.857,9.433 C3.55901568,9.22418286 3.38621247,8.87935269 3.39729469,8.51565441 C3.40837691,8.15195613 3.60185462,7.81828687 3.912,7.628 L9.245,4.352 C9.57820431,4.14746267 9.99593499,4.1389799 10.3371682,4.32982156 C10.6784014,4.52066323 10.8898476,4.88102607 10.89,5.272 L10.89,5.273 Z"
              fill={strokeColor}
              opacity={0.793}
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};

export default DiamondIcon;
