export interface WeatherApiResponse {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    daily: any;
    current_weather: {
        is_day: number;
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