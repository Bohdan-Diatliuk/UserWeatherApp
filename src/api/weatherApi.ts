import axios from "axios";
import type { Weather } from "../types/weather";

export const fetchWeatherData = async (
  latitude: string, 
  longitude: string
): Promise<Weather> => {
  try {
    console.log(`Fetching weather for coordinates: ${latitude}, ${longitude}`);
    
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=7`,
      {
        timeout: 15000,
        headers: {
          'Accept': 'application/json',
        }
      }
    );
    
    console.log(`✓ Weather API success for ${latitude}, ${longitude}`);
    
    return {
      current: {
        temperature: response.data.current.temperature_2m,
        weatherCode: response.data.current.weather_code,
        isDay: response.data.current.is_day,
        lowTemp: response.data.daily.temperature_2m_min[0],
        highTemp: response.data.daily.temperature_2m_max[0],
      },
      forecast: response.data.daily.time.map((date: string, index: number) => ({
        date,
        lowTemp: response.data.daily.temperature_2m_min[index],
        highTemp: response.data.daily.temperature_2m_max[index],
        weatherCode: response.data.daily.weather_code[index],
      }))
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("❌ Weather API Error:", {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        coordinates: { latitude, longitude }
      });
    } else {
      console.error("❌ Unexpected error:", error);
    }
    
    throw error;
  }
};