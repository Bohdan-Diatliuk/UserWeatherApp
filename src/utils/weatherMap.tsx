import type { WeatherApiResponse } from "../api/types";
import type { Weather } from "../types/weather";

export const mapWeather = (data: WeatherApiResponse): Weather => ({
  current: {
    temperature: data.current_weather.temperature,
    weatherCode: data.current_weather.weathercode,
    isDay: data.current_weather.is_day,
    lowTemp: data.daily.temperature_2m_min[0],
    highTemp: data.daily.temperature_2m_max[0],
  },
  forecast: data.daily.time.map((date: string, index: number) => ({
    date,
    lowTemp: data.daily.temperature_2m_min[index],
    highTemp: data.daily.temperature_2m_max[index],
    weatherCode: data.daily.weathercode[index],
  })),
});
