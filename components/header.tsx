import * as React from 'react';
import Logo from './logo';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
        <Logo></Logo>
    </>
  );
};

export default Header;
