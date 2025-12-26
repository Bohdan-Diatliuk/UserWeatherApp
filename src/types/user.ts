import type { Weather } from "./weather";
export interface User {
  id: string;
  name: string;
  gender: 'male' | 'female';
  email: string;
  avatarUrl: string;
  city: string;
  country: string;
  coordinates: { latitude: string; longitude: string };
  weather?: Weather;
}

export type UserCardProps = User;