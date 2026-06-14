import { apiClient } from '../client/axios';
import type { ServiceItem } from '@types/api/service';

export const getServices = async (): Promise<ServiceItem[]> => {
  const { data } = await apiClient.get<ServiceItem[]>('/services');
  return data;
};
