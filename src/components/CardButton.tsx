type CardButtonProp = {
  isReverse?: boolean,
};

function CardButton(prop: CardButtonProp) {
  const { isReverse } = prop;
  return (
    <button
      aria-label="next page"
      className={ `flex min-w-fit ${isReverse ? '-rotate-180' : ''}` }
    >
      <img className="w-10" src="./src/assets/caret.svg" alt="" />
    </button>
  );
}

export default CardButton;
