import styled from 'styled-components';
import Link from 'next/link';

const Navigation = (props) => {
  return (
    <NavigationWrapper>
      <ul>
        <li onClick={props.triggerMobileMenu}>
          <Link href="/articles">All Articles</Link>
        </li>
        <li onClick={props.triggerMobileMenu}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.nav`
  position: absolute;
  background-color: #e1e1e1;
  top: 66px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 66px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
  }

  li {
    padding: 10px 0;
    text-align: center;
  }
`;

export default Navigation;
