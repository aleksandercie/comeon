type LayoutType = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
          <img src="images/logo.svg" alt="logo" />
        </div>
      </div>
      <div className="main container">{children}</div>
    </>
  );
};

export default Layout;
