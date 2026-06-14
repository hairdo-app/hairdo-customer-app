import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
