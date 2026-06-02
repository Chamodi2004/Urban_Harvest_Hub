import { useEffect, useState } from "react";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Colombo&appid=6f9ec36adc7fdc52acf07e4806a2a4bc&units=metric"
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  }, []);

  if (!weather) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        Loading weather...
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-sky-500 to-blue-700 text-white rounded-3xl shadow-2xl p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          📍 Colombo
        </h2>

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt="Weather Icon"
          className="mx-auto"
        />

        <h1 className="text-6xl font-bold">
          {Math.round(weather.main.temp)}°
        </h1>

        <p className="text-xl capitalize mt-2">
          {weather.weather[0].description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white/20 rounded-xl p-4 text-center">
          <p className="text-sm">Humidity</p>
          <p className="text-2xl font-bold">
            {weather.main.humidity}%
          </p>
        </div>

        <div className="bg-white/20 rounded-xl p-4 text-center">
          <p className="text-sm">Feels Like</p>
          <p className="text-2xl font-bold">
            {Math.round(weather.main.feels_like)}°
          </p>
        </div>

        <div className="bg-white/20 rounded-xl p-4 text-center">
          <p className="text-sm">Wind</p>
          <p className="text-2xl font-bold">
            {weather.wind.speed} m/s
          </p>
        </div>

        <div className="bg-white/20 rounded-xl p-4 text-center">
          <p className="text-sm">Pressure</p>
          <p className="text-2xl font-bold">
            {weather.main.pressure}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;