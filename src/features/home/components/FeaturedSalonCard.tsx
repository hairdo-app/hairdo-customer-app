import React from 'react';
import { View, Text } from 'react-native';
import { Star, MapPin } from 'lucide-react-native';
import { styles } from '../HomeStyles';

type SalonItem = {
  id: string;
  color: string;
  name: string;
  rating: string | number;
  reviews: string | number;
  distance: string;
};

type FeaturedSalonCardProps = {
  item: SalonItem;
  colors: {
    accent: string;
    muted: string;
    text: string;
    textSecondary: string;
  };
};

export const FeaturedSalonCard = ({ item, colors }: FeaturedSalonCardProps) => (
  <View style={[styles.salonCard, { backgroundColor: item.color }]}> 
    <View style={styles.salonImagePlaceholder} />
    <Text style={[styles.salonName, { color: colors.text }]}>{item.name}</Text>
    <View style={styles.salonMetaRow}>
      <View style={styles.salonMetaItem}>
        <Star size={14} color={colors.accent} />
        <Text style={[styles.salonMetaText, { color: colors.text }]}>{item.rating}</Text>
        <Text style={[styles.salonMetaSub, { color: colors.textSecondary }]}>({item.reviews})</Text>
      </View>
      <View style={styles.salonMetaItem}> 
        <MapPin size={14} color={colors.muted} />
        <Text style={[styles.salonMetaText, { color: colors.text }]}>{item.distance}</Text>
      </View>
    </View>
  </View>
);
