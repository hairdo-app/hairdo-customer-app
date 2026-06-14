import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {
  Bell,
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Star,
  MapPin,
} from 'lucide-react-native';
import { useTheme } from '@theme/ThemeProvider';
import { useHomeData } from '@hooks/useHomeData';

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
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
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
            <View style={styles.sectionHeadingRow}>
              <Text style={[styles.sectionHeading, { color: colors.text }]}>Categories</Text>
              <Text style={[styles.seeAllText, { color: colors.primary }]}>See All</Text>
            </View>

            <FlatList
              data={categories}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesList}
              renderItem={({ item }) => {
                const isActive = item.id === activeCategory;
                return (
                  <Pressable
                    style={[
                      styles.categoryButton,
                      {
                        backgroundColor: isActive ? colors.primarySoft : colors.card,
                        borderColor: isActive ? colors.primary : 'transparent',
                      },
                    ]}
                    onPress={() => setActiveCategory(item.id)}
                  >
                    <Text style={[styles.categoryLabel, { color: isActive ? colors.primary : colors.textSecondary }]}> 
                      {item.label}
                    </Text>
                  </Pressable>
                );
              }}
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

            <View style={styles.sectionHeadingRow}> 
              <Text style={[styles.sectionHeading, { color: colors.text }]}>Featured Salons</Text>
              <Text style={[styles.seeAllText, { color: colors.primary }]}>Explore all</Text>
            </View>

            <FlatList
              data={featuredSalons}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuredList}
              renderItem={({ item }) => (
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
              )}
            />

            <View style={styles.sectionHeadingRow}> 
              <Text style={[styles.sectionHeading, { color: colors.text }]}>Recommended Services</Text>
              <Text style={[styles.seeAllText, { color: colors.primary }]}>View all</Text>
            </View>

            {recommendedServices.map((service) => (
              <View key={service.id} style={[styles.serviceCard, { backgroundColor: service.color }]}> 
                <View style={styles.serviceInfo}>
                  <Text style={[styles.serviceTitle, { color: colors.text }]}>{service.title}</Text>
                  <Text style={[styles.serviceDescription, { color: colors.textSecondary }]}>{service.description}</Text>
                </View>
                <View style={styles.serviceAction}>
                  <Text style={[styles.servicePrice, { color: colors.primary }]}>{service.price}</Text>
                  <Pressable style={[styles.bookButtonSmall, { backgroundColor: colors.primary }]}> 
                    <Text style={styles.bookButtonText}>Book</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
  },
  wave: {
    fontSize: 24,
  },
  locationRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  locationText: {
    marginLeft: 6,
    fontSize: 14,
  },
  searchBox: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeadingRow: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '700',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
  },
  categoriesList: {
    paddingVertical: 16,
  },
  categoryButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 14,
    borderWidth: 1,
    marginRight: 12,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  offerCard: {
    borderRadius: 24,
    padding: 22,
    marginTop: 10,
  },
  offerText: {
    maxWidth: '80%',
  },
  offerBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 12,
  },
  offerBadgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  offerTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },
  offerSubtitle: {
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
  bookNowButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 18,
  },
  bookNowText: {
    fontSize: 14,
    fontWeight: '700',
  },
  rewardCard: {
    borderRadius: 24,
    padding: 20,
    marginTop: 20,
  },
  rewardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  rewardSubtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  rewardView: {
    fontSize: 14,
    fontWeight: '700',
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  rewardPoints: {
    fontSize: 22,
    fontWeight: '800',
  },
  rewardMeter: {
    flex: 1,
    height: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  rewardMeterFill: {
    height: '100%',
    borderRadius: 8,
  },
  rewardDistance: {
    fontSize: 12,
  },
  featuredList: {
    paddingVertical: 16,
  },
  salonCard: {
    width: 220,
    borderRadius: 24,
    padding: 18,
    marginRight: 16,
  },
  salonImagePlaceholder: {
    width: '100%',
    height: 120,
    borderRadius: 18,
    backgroundColor: '#F3F4F6',
    marginBottom: 18,
  },
  salonName: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  salonMetaRow: {
    gap: 10,
  },
  salonMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  salonMetaText: {
    fontSize: 12,
    fontWeight: '600',
  },
  salonMetaSub: {
    fontSize: 12,
  },
  serviceCard: {
    borderRadius: 20,
    padding: 18,
    marginTop: 16,
  },
  serviceInfo: {
    marginBottom: 14,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  serviceDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  serviceAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: '700',
  },
  bookButtonSmall: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  loading: {
    marginTop: 40,
  },
});
