type ForecastItemProps = {
  weekday: string,
  date: string,
  icon: string,
  condition: string,
  minTemp: number,
  maxTemp: number,
};

function ForecastItem(props: ForecastItemProps) {
  const { weekday, date, icon, condition, minTemp, maxTemp } = props;
  return (
    <div>
      <h3>
        { weekday }
      </h3>
      <p>
        { date }
      </p>
      <img src={ icon } alt="weather icon" />
      <h3>{ condition }</h3>
      <p>{`${minTemp}-${maxTemp}°C`}</p>
    </div>
  );
}

export default ForecastItem;
