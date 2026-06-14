export type HomeCategory = {
  id: string;
  label: string;
};

export type FeaturedSalon = {
  id: string;
  name: string;
  rating: string;
  reviews: string;
  distance: string;
  label: string;
  color: string;
  categories: string[];
};

export type RecommendedService = {
  id: string;
  title: string;
  description: string;
  price: string;
  color: string;
  category: string;
};

export type HomeOffer = {
  title: string;
  subtitle: string;
  badge: string;
  actionLabel: string;
};

export type HomeRewards = {
  title: string;
  subtitle: string;
  points: string;
  goal: string;
  actionLabel: string;
  progress: number;
};

export type HomeResponse = {
  categories: HomeCategory[];
  featuredSalons: FeaturedSalon[];
  recommendedServices: RecommendedService[];
  offer: HomeOffer;
  rewards: HomeRewards;
};
