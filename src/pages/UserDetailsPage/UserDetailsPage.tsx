import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { loadUsers } from "../../store/usersSlice";
import { WeatherIcons } from "../../utils/weatherIcons";
import "./UserDetailsPage.scss";
import { MoveLeft } from "lucide-react";

export const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  const { users, loading } = useSelector((state: RootState) => state.users);
  const user = users.find(u => u.id === id);

  useEffect(() => {
    if (users.length === 0 && !loading) {
      dispatch(loadUsers());
    }
  }, [dispatch, users.length, loading]);

  if (loading) {
    return (
      <div className="user-details">
        <p>Loading user data...</p>
      </div>
    );
  }

  if (!loading && !user && users.length > 0) {
    return (
      <div className="user-details">
        <p>User not found</p>
        <button onClick={() => navigate("/")} className="back-button">
          Back to User List
        </button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="user-details">
        <p>Loading...</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="user-details">
      <button onClick={() => navigate("/")} className="back-button">
        <span className="back-button__icon">
          <MoveLeft size={16}/>
        </span>
        <span>
          Back to User List
        </span>
      </button>

      <div className="user-details__container">
        <div className="user-info">
          <h1 className="user-info__title">User Information</h1>
          
          <div className="user-info__content">
            <img 
              src={user.avatarUrl} 
              alt={user.name} 
              className="user-info__avatar" 
            />
            
            <div className="user-info__details">
              <div className="user-info__item">
                <span className="user-info__label">Name:</span>
                <span className="user-info__value">{user.name}</span>
              </div>
              
              <div className="user-info__item">
                <span className="user-info__label">Gender:</span>
                <span className="user-info__value">{user.gender}</span>
              </div>
              
              <div className="user-info__item">
                <span className="user-info__label">Location:</span>
                <span className="user-info__value">{user.city}, {user.country}</span>
              </div>
              
              <div className="user-info__item">
                <span className="user-info__label">Email:</span>
                <span className="user-info__value">{user.email}</span>
              </div>
            </div>
          </div>
        </div>

        {user.weather ? (
          <div className="weather-forecast">
            <h2 className="weather-forecast__title">7-Day Weather Forecast</h2>
            
            <div className="weather-forecast__list">
              {user.weather.forecast.map((day, index) => (
                <div key={day.date} className="forecast-card">
                  <div className="forecast-card__date">
                    {index === 0 ? 'Today' : formatDate(day.date)}
                  </div>
                  
                  <div className="forecast-card__icon">
                    {WeatherIcons(day.weatherCode, 1)}
                  </div>
                  
                  <div className="forecast-card__temps">
                    <div className="forecast-card__temp-item">
                      <span className="forecast-card__temp-label">High:</span>
                      <span className="forecast-card__temp-value high">
                        {day.highTemp}°C
                      </span>
                    </div>
                    
                    <div className="forecast-card__temp-item">
                      <span className="forecast-card__temp-label">Low:</span>
                      <span className="forecast-card__temp-value low">
                        {day.lowTemp}°C
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="weather-forecast">
            <p>Weather data not available</p>
          </div>
        )}
      </div>
    </div>
  );
};