function ForecastItem(props: any) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];
  const { date, icon, condition, minTemp, maxTemp } = props;
  return (
    <li className="flex flex-col text-center justify-center w-25%">
      <h3 className="text-center font-bold">
        { days[date.getDay()] }
      </h3>
      <p className="text-slate-400">
        { months[date.getMonth()] }
        { ' ' }
        { date.getDate() }
      </p>
      <img src={ icon } alt="weather icon" />
      <h3 className="font-bold">{ condition }</h3>
      <p className="text-slate-400">{`${minTemp} - ${maxTemp}°C`}</p>
    </li>
  );
}

export default ForecastItem;
