type ButtonType = {
  float: 'right' | 'left';
  type: 'button';
  icon: JSX.Element;
  name: string;
  classname?: string;
};

const Button = ({ float, type, icon, name, classname }: ButtonType) => {
  const isRight = float === 'right';

  return (
    <button
      className={`${
        classname ? classname : ''
      } ui ${float} floated secondary button inverted `}
      type={type}
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
