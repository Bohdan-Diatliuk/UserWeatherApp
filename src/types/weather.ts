export interface CurrentWeather {
    temperature: number;
    weatherCode: number;
    isDay: number;
    lowTemp: number;
    highTemp: number;
};

export interface WeatherForecast {
    date: string;
    lowTemp: number;
    highTemp: number;
    weatherCode: number;
};

export interface Weather {
    current: CurrentWeather;
    forecast: WeatherForecast[];
};