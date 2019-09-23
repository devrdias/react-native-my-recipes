import { Badge as NativeBadge } from 'native-base';
import React from 'react';
import { View, Text, Icon } from 'react-native';

const Badge = ({ text, value }) => (
  value && (
  <View style={{ margin: 3 }}>
    <NativeBadge primary>
      <Text style={{ color: 'white', paddingHorizontal: 3 }}>{text}</Text>
    </NativeBadge>
  </View>
  )
);

export default Badge;
