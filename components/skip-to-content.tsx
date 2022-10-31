import * as React from "react";

interface ISkipToContentProps {}

const SkipToContent: React.FunctionComponent<ISkipToContentProps> = (props) => {
  return (
    <>
      <a
        href="#main"
        className="nav-links-bg absolute z-[9999] flex -translate-y-[100px] items-center justify-center p-5 font-barlowC text-navText uppercase tracking-navText text-white outline-yellow-50 transition-transform duration-300 focus:translate-y-0"
      >
        Skip to content
      </a>
    </>
  );
};

export default SkipToContent;
