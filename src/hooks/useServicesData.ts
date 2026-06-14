import { useQuery } from '@tanstack/react-query';
import { getServices } from '@services/api/endpoints/service';
import { SERVICES } from '@/data/service';
import type { ServiceItem } from '@types/api/service';

export const useServicesData = () => {
  return useQuery<ServiceItem[], Error, ServiceItem[]>({
    queryKey: ['services'],
    queryFn: getServices,
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
    placeholderData: SERVICES,
  });
};
