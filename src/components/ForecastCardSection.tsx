import CardButton from './CardButton';
import ForecastList from './ForecastList';

function ForecastCardSection() {
  return (
    <div className="flex">
      <CardButton
        isReverse
      />
      <ForecastList />
      <CardButton />
    </div>
  );
}

export default ForecastCardSection;
