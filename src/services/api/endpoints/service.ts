import { apiClient } from '../client/axios';
import type { ServiceItem } from '@app/types/api/service';
import { getMockServices, isApiMocked } from '../mock';

export const getServices = async (): Promise<ServiceItem[]> => {
  if (isApiMocked()) {
    return Promise.resolve(getMockServices());
  }

  const { data } = await apiClient.get<ServiceItem[]>('/services');
  return data;
};
