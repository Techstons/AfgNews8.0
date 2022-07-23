import { weather_access_tokens } from "../keys";

export const weatherFetcher = fetch(
  `https://api.openweathermap.org/data/2.5/onecall?lat=34.5553&lon=69.2075&exclude=hourly,daily,minutely,alerts&units=metric&appid=${weather_access_tokens}`
)
  .then((res) => res.json())
  .then((data) => data);
