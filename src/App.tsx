import Header from './components/Header';
import ForecastItem from './components/ForecastItem';
import { getForecastByCity } from './services/getForecastByCity';

const cityMockup: string = 'london';

const apiData = await getForecastByCity('london');

function App() {
  getForecastByCity('london');
  return (
    <div>
      <Header city={ cityMockup } />
      <ul>
        {
          apiData.map((forecast: any, index: number) => (
          // <ForecastItem
          //   key={ index }
          //   props={ forecast }
          // />
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
    </div>
  );
}

export default App;
