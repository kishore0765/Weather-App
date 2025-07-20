# Weather App

A modern weather application built with HTML, CSS, JavaScript, and Node.js/Express.  
It allows users to search for any city and view current weather conditions and a multi-day forecast using the OpenWeatherMap API.

---
## Live Demo

You can try the Weather App here:  
https://weather-app-a17f.onrender.com/

## Features

- Search weather by city name
- Displays temperature, weather condition, humidity, and wind speed
- Shows weather icons and a multi-day forecast
- Responsive design for desktop and mobile
- Error handling for invalid city names
- API key protected via backend

---

## Folder Structure

```
Weather App/
├── backend/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       ├── bg.jpg
│       ├── message/
│       │   ├── search-city.png
│       │   └── not-found.png
│       └── weather/
│           ├── clouds.svg
│           ├── clear.svg
│           ├── drizzle.svg
│           ├── rain.svg
│           ├── snow.svg
│           ├── atmosphere.svg
│           └── thunderstorm.svg
```

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/kishore0765/Weather-App.git
```

### 2. Install backend dependencies

```sh
cd Weather\ App/backend
npm install
```

### 3. Get your OpenWeatherMap API key

- Sign up at [OpenWeatherMap](https://openweathermap.org/api)
- Copy your API key

### 4. Create a `.env` file in the `backend` folder

```
OPENWEATHER_API_KEY=your_actual_api_key_here
```

### 5. Start the backend server

```sh
node server.js
```

### 6. Open your browser and go to

```
http://localhost:3000/
```

---

## Usage

- Enter a city name in the search box and click the search icon or press Enter.
- View the current weather and forecast.
- If the city is not found, an error message will be displayed.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Node.js & Express
- Axios
- OpenWeatherMap API
- Google Material Symbols

---

## Security Note

Your API key is stored securely in the backend and is **never exposed to the frontend**.  
Never commit your `.env` file to public repositories.

---

## License

MIT License

---

*Made by kishore0765*
