import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserData } from "../api/userApi";
import { fetchWeatherData } from "../api/weatherApi";
import type { User } from "../types/user";

export const loadUsers = createAsyncThunk(
  "users/loadUsers",
  async () => {
    const users = await fetchUserData();
    
    const usersWithWeather = await Promise.all(
      users.map(async (user) => {
        try {
          const weatherData = await fetchWeatherData(
            user.coordinates.latitude,
            user.coordinates.longitude
          );
          return { ...user, weather: weatherData };
        } catch (error) {
          console.error(`Error fetching weather for ${user.name}:`, error);
          return user;
        }
      })
    );
    
    return usersWithWeather;
  }
);

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load users";
      });
  },
});

export default usersSlice.reducer;