export const CLOUDY_PERCENT = 50;

export const getWeatherObj = (weatherObj) => {
  const kelvinD = 273.15;

  return {
    cels: (weatherObj.main.temp - kelvinD).toFixed(2),
    wind: weatherObj.wind.speed,
    humidity: weatherObj.main.humidity,
    clouds: weatherObj.clouds.all,
    day:
      weatherObj.dt >= weatherObj.sys.sunrise &&
      weatherObj.dt < weatherObj.sys.sunset,
    rain: weatherObj.weather.some((el) => el.main === "Rain"),
    hail: weatherObj.weather.some((el) => el.main === "Hail"),
    fog: weatherObj.weather.some((el) => el.main === "Fog"),
  };
};
