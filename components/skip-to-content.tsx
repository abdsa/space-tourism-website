import * as React from 'react';

interface ISkipToContentProps {
}

const SkipToContent: React.FunctionComponent<ISkipToContentProps> = (props) => {
  return (
    <>
    <a href="#main" className='uppercase -translate-y-[100px] focus:translate-y-0 transition-transform duration-300 outline-yellow-50 font-barlowC tracking-navText text-navText z-[9999] flex justify-center items-center p-5 nav-links-bg absolute text-white'>Skip to content</a>
    </>
  );
};

export default SkipToContent;
