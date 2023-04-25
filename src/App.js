import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import getFormattedWeatherData from './services/weatherService';

function App() {

  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
        .then((data) => setWeather(data));
    }

    fetchWeather();
  }, [query, units])


  return (
    <div className="min-h-screen mx-auto flex flex-col justify-between w-full py-2 px-5 bg-gradient-to-bl from-cyan-700 to-blue-700 shadow-xl shadow-gray-500">
      {weather && <TimeAndLocation weather={weather} />}
      {weather && <TemperatureAndDetails  weather={weather} />}
      <h1 className="text-2xl text-center font-bold text-white">What do I wear today?</h1>
      <SearchBar setQuery={setQuery} />
    </div>
  );
}

export default App;
