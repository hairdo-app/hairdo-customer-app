import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../HomeStyles';

type CategoryButtonProps = {
  item: { id: string; label: string };
  isActive: boolean;
  onPress: (id: string) => void;
  colors: {
    primary: string;
    primarySoft: string;
    card: string;
    textSecondary: string;
  };
};

export const CategoryButton = ({ item, isActive, onPress, colors }: CategoryButtonProps) => (
  <Pressable
    style={[
      styles.categoryButton,
      {
        backgroundColor: isActive ? colors.primarySoft : colors.card,
        borderColor: isActive ? colors.primary : 'transparent',
      },
    ]}
    onPress={() => onPress(item.id)}
  >
    <Text style={[styles.categoryLabel, { color: isActive ? colors.primary : colors.textSecondary }]}>
      {item.label}
    </Text>
  </Pressable>
);
