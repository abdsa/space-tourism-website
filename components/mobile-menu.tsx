import * as React from "react";
import MenuCloseButton from "./menu-close-button";
import Nav from "./nav-links";

interface IMobileMenuProps {}

const MobileMenu: React.FunctionComponent<IMobileMenuProps> = (props) => {
  return (
    <amp-sidebar
      id="menu"
      side="right"
      className="nav-links-bg grid grid-rows-[min-content_auto] justify-items-end"
      layout="nodisplay"
    >
      <MenuCloseButton></MenuCloseButton>
      <Nav isMobileMenu></Nav>
    </amp-sidebar>
  );
};

export default MobileMenu;
