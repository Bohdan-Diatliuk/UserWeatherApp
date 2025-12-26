import axios from "axios";
import type { User } from "../types/user";

export const fetchUserData = async (): Promise<User[]> => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.data.results.map((user: any) => ({
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      gender: user.gender,
      email: user.email,
      avatarUrl: user.picture.large,
      city: user.location.city,
      country: user.location.country,
      coordinates: {
        latitude: user.location.coordinates.latitude,
        longitude: user.location.coordinates.longitude,
      },
    }));
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
