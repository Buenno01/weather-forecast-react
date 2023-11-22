const key = `key=${import.meta.env.VITE_TOKEN}`;

const API_URL = `http://api.weatherapi.com/v1/forecast.json?${key}&alerts=no&aqi=no&days=7&q=`;

export const getForecastByCity = async (city:string) => {
  try {
    const response = await fetch(API_URL + city);
    const data = await response.json();
    const { forecast: { forecastday: forecast } } = data;
    const formattedData = forecast.map((element: any) => ({
      date: new Date(element.date),
      icon: element.day.condition.icon,
      condition: element.day.condition.text,
      minTemp: element.day.mintemp_c,
      maxTemp: element.day.maxtemp_c,
    }));
    console.log(formattedData);
  } catch (error: any) {
    console.log(error.message);
  }
};
