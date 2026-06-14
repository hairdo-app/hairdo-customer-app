import { apiClient } from '../client/axios';
import type { BookingItem } from '@types/api/booking';

export const getBookings = async (): Promise<BookingItem[]> => {
  const { data } = await apiClient.get<BookingItem[]>('/bookings');
  return data;
};

export const createBooking = async (booking: BookingItem): Promise<BookingItem> => {
  const { data } = await apiClient.post<BookingItem>('/bookings', booking);
  return data;
};
