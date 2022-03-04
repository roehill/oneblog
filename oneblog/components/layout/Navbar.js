import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Navigation from '../Navigation';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const triggerMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const showMobileMenu = () => {
    if (mobileMenu === true) {
      return <Navigation triggerMobileMenu={triggerMobileMenu} />;
    }
  };

  return (
    <NavbarWrapper>
      <div className="logo-container">
        <Link href="/">OneBlog</Link>
      </div>
      <div onClick={triggerMobileMenu} className="mobile-menu-icon-container">
        <AiOutlineMenu className="mobile-menu-icon" />
      </div>
      {showMobileMenu()}
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 66px;
  padding: 0 20px;

  .mobile-menu-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .mobile-menu-icon {
    font-size: 26px;
  }
`;

export default Navbar;
