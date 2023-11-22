import Header from './components/Header';
import ForecastItem from './components/ForecastItem';
import { getForecastByCity } from './services/getForecastByCity';

const cityMockup: string = 'New York';

const apiData = await getForecastByCity(cityMockup);

function App() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center">
      <div
        className="flex flex-col self-center w-4/12
        bg-slate-800 text-slate-50 rounded-2xl p-2 gap-2
        md:w-5/12 lg:w-4/12"
      >
        <Header city={ cityMockup } />
        <div className="flex">
          <button
            aria-label="previous page"
            className="flex min-w-fit"
          >
            <img className="w-10 -rotate-180" src="./src/assets/caret.svg" alt="" />
          </button>
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
          <button
            aria-label="next page"
            className="flex min-w-fit"
          >
            <img className="w-10" src="./src/assets/caret.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
