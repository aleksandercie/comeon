type HeaderType = {
  title: string;
};

const Header = ({ title }: HeaderType) => (
  <h3 className="ui dividing header">{title}</h3>
);

export default Header;
