import Link from 'next/link';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div className="logo">
        <Link href="/">FavouritePlaces</Link>
      </div>
      <ul>
        <li>
          <Link href="/places">Browse All Places</Link>
        </li>
      </ul>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.nav`
  padding: 0 3vw;
  display: fles;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #f45c01;

  .logo a {
    font-size: 22px;
    font-weight: bold;
  }

  a {
    font-size: 14px;
    color: white;
  }
`;
