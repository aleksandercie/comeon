type ButtonType = {
  float: 'right' | 'left';
  type: 'button' | 'submit';
  icon: JSX.Element;
  name: string;
  onClick: () => void;
  classname?: string;
};

const Button = ({
  float,
  type,
  icon,
  name,
  onClick,
  classname = '',
}: ButtonType) => {
  const isRight = float === 'right';
  const buttonClass = `${classname} ui ${float} floated secondary button inverted`;

  return (
    <button
      className={buttonClass}
      type={type}
      onClick={onClick}
      aria-label={name}
    >
      {isRight ? (
        <>
          {name}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {name}
        </>
      )}
    </button>
  );
};

export default Button;
