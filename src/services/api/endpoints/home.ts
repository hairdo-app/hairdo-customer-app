import { apiClient } from '../client/axios';
import type { HomeResponse } from '@types/api/home';

export const fetchHomeData = async (): Promise<HomeResponse> => {
  const { data } = await apiClient.get<HomeResponse>('/home');
  return data;
};
