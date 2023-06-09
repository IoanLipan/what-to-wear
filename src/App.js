import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import getFormattedWeatherData from './services/weatherService';
import WearSuggestion from './components/WearSuggestion';
// import { WeatherAppServer } from './sdk/weatherAppServer.sdk';

function App() {
  // const initialLocation = WeatherAppServer.randomLocation();
  const initialLocation = "Berlin";

  const [query, setQuery] = useState({ q: initialLocation });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
        .then((data) => setWeather(data));
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = (units === "metric") ? 20 : 68;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  }

  return (
    <div className={`min-h-screen h-screen overscroll-none mx-auto flex justify-between flex-col gap-4 w-full py-2 px-5 bg-gradient-to-bl ${formatBackground()} shadow-xl shadow-gray-500`}>
      {weather && <TimeAndLocation weather={weather} />}
      {weather && <TemperatureAndDetails weather={weather} />}
      {weather && <WearSuggestion weather={weather} />}
      <SearchBar setQuery={setQuery} setUnits={setUnits} weather={weather} />
    </div>
  );
}

export default App;
