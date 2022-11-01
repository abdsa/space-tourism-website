import * as React from "react";
import Logo from "./logo";
import MenuButton from "./menu-button";
import Nav from "./nav-links";
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <header className="desktop:hr-style flex items-center p-5 pb-0 tablet:p-0 justify-between gap-4 tablet:pl-[max(3.7vw,24px)] desktop:pt-10">
        <Logo></Logo>
        <nav className="order-2 hidden tablet:block">
          <Nav isMobileMenu={false}></Nav>
        </nav>
        <MenuButton></MenuButton>
      </header>
    </>
  );
};

export default Header;
