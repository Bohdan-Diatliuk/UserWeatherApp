import axios from "axios";
import type { Weather } from "../types/weather";
import { mapWeather } from "../utils/weatherMap";

export const fetchWeatherData = async (latitude: string, longitude: string): Promise<Weather> => {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=7`
    );
    return mapWeather(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};