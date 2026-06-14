import { apiClient } from '../client/axios';
import type { HomeResponse } from '@app/types/api/home';
import { getMockHomeData, isApiMocked } from '../mock';

export const fetchHomeData = async (): Promise<HomeResponse> => {
  if (isApiMocked()) {
    return Promise.resolve(getMockHomeData());
  }

  const { data } = await apiClient.get<HomeResponse>('/home');
  return data;
};
