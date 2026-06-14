export type BookingItem = {
  id: string;
  serviceId: string;
  salonId: string;
  customerName: string;
  scheduledAt: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
};
