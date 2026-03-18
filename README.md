# 🌤 User Weather App
A React application that displays a list of users along with current weather information for their location. Click on any user card to view detailed info and a 7-day weather forecast.

## Features

- **User List Page** — browse user cards with name, gender, profile photo, location, email, and current weather (icon, temperature, min/max)

- **User Detail Page** — extended user info with a full 7-day weather forecast

- **Caching** — user data is cached in localStorage for 30 minutes to reduce API calls

- **Loading States** — spinner displayed while fetching data

- **Error Handling** — graceful fallback when API requests fail

- **Responsive Design** — works on desktop, tablet, and mobile

## Tech Stack

- React 19 + TypeScript

- Redux Toolkit

- Vite

- Axios

- DummyJSON API (users)

- Open-Meteo API (weather)


## Installation

- Clone the repository
```
git clone https://github.com/Bohdan-Diatliuk/UserWeatherApp.git
cd UserWeatherApp
```

### Install dependencies
```
npm install
```

### Run the development server
```
npm run dev
```
Open http://localhost:5173/UserWeatherApp/ in your browser.