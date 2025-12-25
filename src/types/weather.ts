export interface CurrentWeather {
    temperature: number;
    weather: number;
};

export interface WeatherForecast {
    date: string;
    lowTemp: number;
    highTemp: number;
    weather: number;
};

export interface Weather {
    current: CurrentWeather;
    forecast: WeatherForecast[];
};