import { useQuery } from '@tanstack/react-query';
import { fetchHomeData } from '@services/api/endpoints/home';
import {
  FEATURED_SALONS,
  HOME_CATEGORIES,
  HOME_OFFER,
  HOME_REWARDS,
  RECOMMENDED_SERVICES,
} from '@/data/home';
import type { HomeResponse } from '@types/api/home';

export const useHomeData = () => {
  return useQuery<HomeResponse, Error, HomeResponse>({
    queryKey: ['home'],
    queryFn: fetchHomeData,
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
    placeholderData: {
      categories: HOME_CATEGORIES,
      featuredSalons: FEATURED_SALONS,
      recommendedServices: RECOMMENDED_SERVICES,
      offer: HOME_OFFER,
      rewards: HOME_REWARDS,
    } as HomeResponse,
  });
};
