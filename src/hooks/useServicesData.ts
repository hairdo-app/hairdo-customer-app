import { useQuery } from '@tanstack/react-query';
import { getServices } from '@app/services/api/endpoints/service';
import { SERVICES } from '@app/data/service';
import type { ServiceItem } from '@app/types/api/service';

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
