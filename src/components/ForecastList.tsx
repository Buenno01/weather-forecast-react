import { getForecastByCity } from '../services/getForecastByCity';
import ForecastItem from './ForecastItem';

const apiData = await getForecastByCity('New York');

function ForecastList() {
  return (
    <ul className="flex w-full overflow-hidden">
      {
      apiData.map((forecast: any, index: number) => (
        <ForecastItem
          key={ index }
          date={ forecast.date }
          icon={ forecast.icon }
          condition={ forecast.condition }
          minTemp={ forecast.minTemp }
          maxTemp={ forecast.maxTemp }
        />
      ))
    }
    </ul>
  );
}

export default ForecastList;
