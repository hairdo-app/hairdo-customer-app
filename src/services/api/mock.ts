import { env } from '@app/config/env';
import {
  FEATURED_SALONS,
  HOME_CATEGORIES,
  HOME_OFFER,
  HOME_REWARDS,
  RECOMMENDED_SERVICES,
} from '@app/data/home';
import { SERVICES } from '@app/data/service';
import type { HomeResponse } from '@app/types/api/home';
import type { ServiceItem } from '@app/types/api/service';

export const isApiMocked = () => env.IS_API_MOCKED;

export const getMockHomeData = (): HomeResponse => ({
  categories: HOME_CATEGORIES,
  featuredSalons: FEATURED_SALONS,
  recommendedServices: RECOMMENDED_SERVICES,
  offer: HOME_OFFER,
  rewards: HOME_REWARDS,
});

export const getMockServices = (): ServiceItem[] => SERVICES;
