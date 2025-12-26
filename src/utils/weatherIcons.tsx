import { Cloud, CloudDrizzle, CloudFog, CloudHail, CloudLightning, CloudRain, CloudSnow, CloudSun, Moon, Sun } from "lucide-react"


export const WeatherIcons = (weatherList: number, isDay: number) => {
    switch (true) {
        case weatherList === 0:
            return isDay ? <Sun /> : <Moon />;
        
        case weatherList >= 1 && weatherList <= 3:
            return isDay ? <CloudSun /> : <Cloud />;

        case weatherList >= 45 && weatherList <= 48:
            return <CloudFog />;

        case weatherList >= 51 && weatherList <= 57:
            return <CloudDrizzle />    

        case weatherList >= 61 && weatherList <= 67:
            return <CloudRain />;

        case weatherList >= 71 && weatherList <= 77:
            return <CloudSnow />;

        case weatherList >= 80 && weatherList <= 82:
            return <CloudRain />;

        case weatherList >= 85 && weatherList <= 86:
            return <CloudSnow />;

        case weatherList === 95:
            return <CloudLightning />;

        case weatherList >= 96 && weatherList <= 99:
            return <CloudHail />

        default:
            return <Cloud />;
    }
}