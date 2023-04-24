import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({units: "metric", q: "london" });
    console.log(data);
  }

  fetchWeather();

  return (
    <div className="min-h-screen mx-auto w-full py-2 px-5 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-500">
      <TimeAndLocation />
      <SearchBar />
      <TemperatureAndDetails />
      <h1 className="text-2xl text-center font-bold text-white">What do I wear today?</h1>
      <Forecast title="Hourly forecast" />
      <Forecast title="Daily forecast" />
    </div>
  );
}

export default App;
