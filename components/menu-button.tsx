import * as React from "react";

interface IMenuButtonProps {}

const MenuButton: React.FunctionComponent<IMenuButtonProps> = (props) => {
  return (
    <>
      <button on="tap:menu" className="tablet:hidden">
        <svg
          width="24"
          height="21"
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="3" fill="#D0D6F9" />
          <rect y="9" width="24" height="3" fill="#D0D6F9" />
          <rect y="18" width="24" height="3" fill="#D0D6F9" />
        </svg>
      </button>
    </>
  );
};

export default MenuButton;
