type ForecastItemProps = {
  date: Date,
  icon: string,
  condition: string,
  minTemp: number,
  maxTemp: number,
};

function ForecastItem(props: any) {
  const { weekday, date, icon, condition, minTemp, maxTemp } = props;
  return (
    <li>
      <h3>
        { date.getDay() }
      </h3>
      <p>
        { date.getMonth() }
      </p>
      <img src={ icon } alt="weather icon" />
      <h3>{ condition }</h3>
      <p>{`${minTemp}-${maxTemp}°C`}</p>
    </li>
  );
}

export default ForecastItem;
