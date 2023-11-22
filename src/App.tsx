import Header from './components/Header';
import { getForecastByCity } from './services/getForecastByCity';

const cityMockup: string = 'london';

const apiData = await getForecastByCity('london');

function App() {
  getForecastByCity('london');
  return (
    <div>
      <Header city={ cityMockup } />
    </div>
  );
}

export default App;
