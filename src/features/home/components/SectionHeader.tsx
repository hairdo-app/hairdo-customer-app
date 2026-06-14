import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../HomeStyles';

type SectionHeaderProps = {
  title: string;
  actionLabel: string;
  actionColor: string;
};

export const SectionHeader = ({ title, actionLabel, actionColor }: SectionHeaderProps) => (
  <View style={styles.sectionHeadingRow}>
    <Text style={[styles.sectionHeading, { color: actionColor }]}>{title}</Text>
    <Text style={[styles.seeAllText, { color: actionColor }]}>{actionLabel}</Text>
  </View>
);
