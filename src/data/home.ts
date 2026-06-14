export const HOME_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'hair', label: 'Hair' },
  { id: 'beard', label: 'Beard' },
  { id: 'skin', label: 'Skin' },
  { id: 'nails', label: 'Nails' },
];

export const FEATURED_SALONS = [
  {
    id: 'salon-1',
    name: 'Elite Grooming Co.',
    rating: '4.9',
    reviews: '1.2k',
    distance: '1.2 km',
    label: 'Premium salon',
    color: '#E8F1FF',
    categories: ['Hair', 'Beard'],
  },
  {
    id: 'salon-2',
    name: 'The Gloss Spa',
    rating: '4.7',
    reviews: '850',
    distance: '0.9 km',
    label: 'Modern beauty',
    color: '#FFF5E7',
    categories: ['Skin', 'Nails'],
  },
];

export const RECOMMENDED_SERVICES = [
  {
    id: 'service-1',
    title: 'Deluxe Pedicure',
    description: 'Foot massage & paraffin treatment',
    price: '$45.00',
    color: '#F2F8FF',
    category: 'Nails',
  },
  {
    id: 'service-2',
    title: 'Hot Stone Massage',
    description: '60-minute therapeutic session',
    price: '$85.00',
    color: '#FFFBF0',
    category: 'Massage',
  },
];

export const HOME_OFFER = {
  title: '30% Off your first booking',
  subtitle: 'Book now and get salon services at a discounted rate.',
  badge: 'SPECIAL OFFER',
  actionLabel: 'Book Now',
};

export const HOME_REWARDS = {
  title: 'Gloss Rewards',
  subtitle: 'Next Reward: $10 Off',
  points: '1,250 pts',
  goal: '1,500 pts',
  actionLabel: 'View Rewards',
  progress: 0.8,
};