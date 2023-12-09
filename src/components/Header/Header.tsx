type HeaderType = {
  title: string;
};

const Header = ({ title }: HeaderType) => {
  return <h3 className="ui dividing header">{title}</h3>;
};

export default Header;
