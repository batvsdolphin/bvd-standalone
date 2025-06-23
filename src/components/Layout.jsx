import Nav from "./Nav";
import Logo from "./Logo";

  const Layout = ({ name, children, mode }) => {
    return (
      <div className={name}>
        <div>
          <Logo mode={mode} />
          <Nav mode={mode} />
        </div>
        <main>
          {children}
        </main>
      </div>
    );
  };

  export default Layout;