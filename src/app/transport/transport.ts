export interface Transportation {
    id: number;
    departureLocation: string;
    destination: string;
    departureTime: string;
    arrivalTime: string;
    transportType: string;
    capacity: number;
    availableSeats: number;
    price: number;
  }