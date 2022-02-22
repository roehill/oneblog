import Link from 'next/link';
import styled from 'styled-components';

export default function Button(props) {
  if (props.link) {
    return (
      <ButtonWrapper>
        <Link href={props.link}>
          <a>{props.children}</a>
        </Link>
      </ButtonWrapper>
    );
  }

  return (
    <ButtonWrapper onClick={props.onClick}>{props.children}</ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  padding: 5px 10px;
  border-radius: 3px;
  background: #f45c01;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
