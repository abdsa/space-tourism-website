import * as React from "react";
import Logo from "./logo";
import Nav from "./nav-links";
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <header className="desktop:hr-style flex pl-[max(3.7vw,24px)] justify-between gap-4 items-center">
      <Logo></Logo>
        <nav className="order-2 py-8">
          <Nav></Nav>
        </nav>
      </header>
    </>
  );
};

export default Header;
