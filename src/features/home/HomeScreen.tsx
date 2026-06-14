import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, FlatList, Pressable, ActivityIndicator } from 'react-native';
import { Bell, ArrowLeft, Search, SlidersHorizontal, Star, MapPin } from 'lucide-react-native';
import { useTheme } from '@app/theme/ThemeProvider';
import { useHomeData } from '@app/hooks/useHomeData';
import { styles } from './HomeStyles';
import { SectionHeader, CategoryButton, FeaturedSalonCard, ServiceCard } from './components';

export default function HomeScreen() {
  const { colors } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const { data, isLoading } = useHomeData();

  const categories = data?.categories ?? [];
  const featuredSalons = data?.featuredSalons ?? [];
  const recommendedServices = data?.recommendedServices ?? [];
  const offer = data?.offer;
  const rewards = data?.rewards;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Pressable style={[styles.iconButton, { backgroundColor: colors.card }]}> 
            <ArrowLeft size={20} color={colors.primary} />
          </Pressable>
          <Text style={[styles.screenTitle, { color: colors.primary }]}>GLOSS & CO.</Text>
          <Pressable style={[styles.iconButton, { backgroundColor: colors.card }]}> 
            <Bell size={20} color={colors.primary} />
          </Pressable>
        </View>

        <Text style={[styles.greeting, { color: colors.text }]}>Hello, Alex <Text style={styles.wave}>👋</Text></Text>
        <View style={styles.locationRow}>
          <MapPin size={14} color={colors.muted} />
          <Text style={[styles.locationText, { color: colors.muted }]}>New York, NY</Text>
        </View>

        <View style={[styles.searchBox, { backgroundColor: colors.card, borderColor: colors.border }]}> 
          <Search size={18} color={colors.muted} />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Search for salon services"
            placeholderTextColor={colors.muted}
          />
          <Pressable style={[styles.filterButton, { backgroundColor: colors.primarySoft }]}> 
            <SlidersHorizontal size={18} color={colors.primary} />
          </Pressable>
        </View>

        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primary} style={styles.loading} />
        ) : (
          <> 
            <SectionHeader title="Categories" actionLabel="See All" actionColor={colors.primary} />

            <FlatList
              data={categories}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesList}
              renderItem={({ item }) => (
                <CategoryButton item={item} isActive={item.id === activeCategory} onPress={setActiveCategory} colors={colors} />
              )}
            />

            {offer && (
              <View style={[styles.offerCard, { backgroundColor: colors.primary }]}> 
                <View style={styles.offerText}>
                  <View style={[styles.offerBadge, { backgroundColor: colors.surface }]}> 
                    <Text style={[styles.offerBadgeText, { color: colors.primary }]}>{offer.badge}</Text>
                  </View>
                  <Text style={[styles.offerTitle, { color: colors.surface }]}>{offer.title}</Text>
                  <Text style={[styles.offerSubtitle, { color: colors.surface }]}>{offer.subtitle}</Text>
                  <Pressable style={[styles.bookNowButton, { backgroundColor: colors.surface }]}> 
                    <Text style={[styles.bookNowText, { color: colors.primary }]}>{offer.actionLabel}</Text>
                  </Pressable>
                </View>
              </View>
            )}

            {rewards && (
              <View style={[styles.rewardCard, { backgroundColor: colors.cardAlternative }]}> 
                <View style={styles.rewardHeader}>
                  <View>
                    <Text style={[styles.rewardTitle, { color: colors.text }]}>{rewards.title}</Text>
                    <Text style={[styles.rewardSubtitle, { color: colors.textSecondary }]}>{rewards.subtitle}</Text>
                  </View>
                  <Text style={[styles.rewardView, { color: colors.primary }]}>{rewards.actionLabel}</Text>
                </View>
                <View style={styles.pointsRow}>
                  <View>
                    <Text style={[styles.rewardPoints, { color: colors.primary }]}>{rewards.points}</Text>
                  </View>
                  <View style={[styles.rewardMeter, { backgroundColor: colors.primarySoft }]}> 
                    <View style={[styles.rewardMeterFill, { backgroundColor: colors.primary, width: `${rewards.progress * 100}%` }]} />
                  </View>
                  <Text style={[styles.rewardDistance, { color: colors.textSecondary }]}>{rewards.goal}</Text>
                </View>
              </View>
            )}

            <SectionHeader title="Featured Salons" actionLabel="Explore all" actionColor={colors.primary} />

            <FlatList
              data={featuredSalons}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuredList}
              renderItem={({ item }) => <FeaturedSalonCard item={item} colors={colors} />}
            />

            <SectionHeader title="Recommended Services" actionLabel="View all" actionColor={colors.primary} />

            {recommendedServices.map((service) => (
              <ServiceCard key={service.id} service={service} colors={colors} />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}

