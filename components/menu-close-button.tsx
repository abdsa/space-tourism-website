import * as React from "react";

interface IMenuCloseButtonProps {}

const MenuCloseButton: React.FunctionComponent<IMenuCloseButtonProps> = (
  props
) => {
  return (
    <>
      <button on="tap:menu.close" className="m-4 h-[21px] w-5">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex"
        >
          <rect
            x="2.5752"
            y="0.954102"
            width="24"
            height="3"
            transform="rotate(45 2.5752 0.954102)"
            fill="#D0D6F9"
          />
          <rect
            x="0.454102"
            y="17.9246"
            width="24"
            height="3"
            transform="rotate(-45 0.454102 17.9246)"
            fill="#D0D6F9"
          />
        </svg>
      </button>
    </>
  );
};

export default MenuCloseButton;
