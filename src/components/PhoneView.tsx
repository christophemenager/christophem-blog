import { FC } from 'react';
import { View } from 'react-native-web';

export const PhoneView: FC = ({ children }) => (
  <View
    style={{
      height: 400,
      width: 200,
      borderWidth: 1,
      borderColor: '#1c6afb',
    }}
  >
    {children}
  </View>
);
