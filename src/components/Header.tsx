type HeaderProps = {
  city: string,
};

function Header(props: HeaderProps) {
  const { city } = props;
  return (
    <h2>{ city }</h2>
  );
}

export default Header;
