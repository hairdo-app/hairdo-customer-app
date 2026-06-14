import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../HomeStyles';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  price: string;
  color: string;
};

type ServiceCardProps = {
  service: ServiceItem;
  colors: {
    primary: string;
  };
};

export const ServiceCard = ({ service, colors }: ServiceCardProps) => (
  <View style={[styles.serviceCard, { backgroundColor: service.color }]}> 
    <View style={styles.serviceInfo}>
      <Text style={[styles.serviceTitle, { color: colors.primary }]}>{service.title}</Text>
      <Text style={[styles.serviceDescription, { color: colors.primary }]}>{service.description}</Text>
    </View>
    <View style={styles.serviceAction}>
      <Text style={[styles.servicePrice, { color: colors.primary }]}>{service.price}</Text>
      <Pressable style={[styles.bookButtonSmall, { backgroundColor: colors.primary }]}> 
        <Text style={styles.bookButtonText}>Book</Text>
      </Pressable>
    </View>
  </View>
);
