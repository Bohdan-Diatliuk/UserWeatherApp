import React from "react";
import type { User } from "../../types/user";
import "./UserCard.scss";
import { WeatherIcons } from "../../utils/weatherIcons";
import { Link } from "react-router-dom";
import { MoveDown, MoveUp } from "lucide-react";

export const UserCard: React.FC<User> = ({
  id,
  name,
  gender,
  avatarUrl,
  city,
  country,
  email,
  weather,
}) => {
  return (
    <div className="page">
      <Link to={`/user/${id}`} className="card">
        <img className="card__avatar" src={avatarUrl} alt={name} />

        <h2 className="card__name">{name}</h2>

        <div className="card__info">
          <div className="card__info-item">Gender: {gender}</div>
          <div className="card__info-item">
            Location: {city}, {country}
          </div>
          <div className="card__info-item">Email: {email}</div>
        </div>

        {weather && (
          <div className="card__weather">
            <h3 className="card__weather-title">Weather</h3>
            <div className="card__weather-block">
            <span className="card__weather-icon">
              {WeatherIcons(weather.current.weatherCode, weather.current.isDay)}
            </span>
            <span className="card__weather-temp">
               {weather.current.temperature}°C
            </span>
            <span className="card__weather-low">
              <span className="card__weather-low-icon">
                <MoveDown size={13} />
              </span>
              <span>
               {weather.current.lowTemp}°C
              </span>
            </span>
            <span className="card__weather-high">
              <span className="card__weather-high-icon">
                <MoveUp size={13} />
              </span>
              <span>
               {weather.current.highTemp}°C
              </span>
            </span>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};
