import { Cabin } from "./cabin";

export interface Booking {
  id: number;
  guestId: number;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: boolean;
  created_at: string;
  cabins: Cabin;
}
