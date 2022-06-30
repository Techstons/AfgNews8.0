export type Article = {
  title: string;
  slug: string;
  image: string;
  category: string;
  description: string;
};

export type Currencies = "EUR" | "INR" | "IRR" | "PKR" | "USD";

export type CurrencyInfo = {
  data: {
    [key in Currencies]: {
      code: string;
      value: number;
    };
  };
};

export type WeatherInfo = {
  data: {
    current: {
      dt: Date;
      humidity: number;
      sunrise: Date;
      sunset: Date;
      temp: number;
      pressure: number;
      weather: {
        description: string;
        main: string;
      }[];
      wind_speed: number;
      wind_deg: number;
      wind_gust: number;
    };
    lat: number;
    lon: number;
    timezone: string;
  };
};
