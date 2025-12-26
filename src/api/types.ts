export interface WeatherApiResponse {
    current_weather: {
        is_day: number;
        temperature: number;
        weathercode: number;
    };
    daily: {
        time: string[];
        temperature_2m_min: number[];
        temperature_2m_max: number[];
        weathercode: number[];
    };
};