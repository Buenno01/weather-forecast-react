import Header from './Header';
import ForecastCardSection from './ForecastCardSection';

const cityMockup: string = 'New York';

function Card() {
  return (
    <div
      className="flex flex-col self-center w-4/12
        bg-slate-800 text-slate-50 rounded-2xl p-2 gap-2
        md:w-5/12 lg:w-4/12"
    >
      <Header city={ cityMockup } />
      <ForecastCardSection />
    </div>
  );
}

export default Card;
