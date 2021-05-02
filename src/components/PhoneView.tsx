import React, { FC } from 'react';
import { ImageBackground, View } from 'react-native-web';

export const PhoneView: FC = ({ children }) => (
  <View style={{ flex: 1, alignItems: 'center', marginVertical: 15 }}>
    <ImageBackground
      style={{
        width: 200,
        height: 400,
        paddingVertical: 22,
        paddingHorizontal: 11,
      }}
      resizeMode="contain"
      source={'../../static/assets/images/deviceFrame.png'}
    >
      <View style={{ flex: 1 }}>{children}</View>
    </ImageBackground>
  </View>
);
