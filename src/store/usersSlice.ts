import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserData } from "../api/userApi";
import { fetchWeatherData } from "../api/weatherApi";
import type { User } from "../types/user";

export const loadUsers = createAsyncThunk(
  "users/loadUsers",
  async () => {
    const cachedUsers = localStorage.getItem('users');
    const cacheTimestamp = localStorage.getItem('users_timestamp');
    const CACHE_DURATION = 30 * 60 * 1000;
    
    if (cachedUsers && cacheTimestamp) {
      const now = Date.now();
      const timestamp = parseInt(cacheTimestamp);
      
      if (now - timestamp < CACHE_DURATION) {
        console.log('Loading users from localStorage');
        return JSON.parse(cachedUsers);
      } else {
        console.log('Cache expired, fetching new data');
      }
    }

    console.log('Fetching new users from API');
    const users = await fetchUserData();
    
    const usersWithWeather: User[] = [];
    
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      
      try {
        console.log(`Loading weather for ${user.name} (${i + 1}/${users.length})`);
        
        const weatherData = await fetchWeatherData(
          user.coordinates.latitude,
          user.coordinates.longitude
        );
        
        usersWithWeather.push({ ...user, weather: weatherData });
        console.log(`Weather loaded for ${user.name}`);
      } catch (error) {
        console.error(`Failed to load weather for ${user.name}:`, error);
        usersWithWeather.push(user);
      }
      
      if (i < users.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }
    
    console.log(`Loaded ${usersWithWeather.length} users, ${usersWithWeather.filter(u => u.weather).length} with weather`);
    
    localStorage.setItem('users', JSON.stringify(usersWithWeather));
    localStorage.setItem('users_timestamp', Date.now().toString());
    
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
  reducers: {
    clearUsers: (state) => {
      state.users = [];
      localStorage.removeItem('users');
      localStorage.removeItem('users_timestamp');
    }
  },
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

export const { clearUsers } = usersSlice.actions;
export default usersSlice.reducer;