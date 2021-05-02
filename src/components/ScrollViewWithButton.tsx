import React from 'react';
import { Button, ScrollView, StyleProp, Text, View, ViewStyle } from 'react-native-web';

type ScrollViewWithButtonProps = {
  contentContainerStyle: StyleProp<ViewStyle>;
  style: StyleProp<ViewStyle>;
};

export const ScrollViewWithButton = ({
  contentContainerStyle,
  style,
}: ScrollViewWithButtonProps) => (
  <ScrollView contentContainerStyle={contentContainerStyle} style={style}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It
        has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged.It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </Text>
    </View>
    <Button color="#0452e2" title="Very Beautiful button" onPress={() => {}} />
  </ScrollView>
);
