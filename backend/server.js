require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// --- KEY CHANGE ---
// Serve static files from the 'frontend' folder
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('[Server] Error fetching weather data:', error.response ? error.response.data : error.message);
    res.status(error.response ? error.response.status : 500).json({ message: "Error fetching data" });
  }
});

app.get('/forecast', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('[Server] Error fetching forecast data:', error.response ? error.response.data : error.message);
    res.status(error.response ? error.response.status : 500).json({ message: "Error fetching forecast data" });
  }
});

app.listen(PORT, () => console.log(`Server is running successfully on http://localhost:${PORT}`));