import axios from "axios";
import type { User } from "../types/user";

export const fetchUserData = async (): Promise<User[]> => {
  try {
    const response = await axios.get('https://dummyjson.com/users?limit=10');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.data.users.map((user: any) => ({
      id: user.id.toString(),
      name: `${user.firstName} ${user.lastName}`,
      gender: user.gender,
      email: user.email,
      avatarUrl:`https://randomuser.me/portraits/${user.gender === 'male' ? 'men' : 'women'}/${user.id}.jpg`,
      city: user.address.city,
      country: user.address.country ?? 'USA',
      coordinates: {
        latitude: user.address.coordinates.lat.toString(),
        longitude: user.address.coordinates.lng.toString(),
      },
    }));
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};