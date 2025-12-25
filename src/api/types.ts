export interface WeatherApiResponse {
    current_weather: {
        temperature: number;
        weathercode: number;
    };
    forecast: {
        time: string[];
        temperature_2m_min: number[];
        temperature_2m_max: number[];
        weathercode: number[];
    };
};