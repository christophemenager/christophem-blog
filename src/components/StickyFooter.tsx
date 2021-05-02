import React from 'react';
import { Text, View } from 'react-native-web';

export const StickyFooter = () => {
  return (
    <View
      style={{
        height: 40,
        backgroundColor: '#a3c3fd',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text color="white">Sticky Footer</Text>
    </View>
  );
};
