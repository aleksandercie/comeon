type LayoutType = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutType) => (
  <>
    <header className="ui one column center aligned page grid">
      <div className="column twelve wide">
        <img src="images/logo.svg" alt="logo" loading="lazy" />
      </div>
    </header>
    <main className="main container">{children}</main>
  </>
);

export default Layout;
