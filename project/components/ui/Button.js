import Link from 'next/link';
import styled from 'styled-components';

export default function Button(props) {
  return (
    <div>
      <Link href={props.link}>
        <a>{props.children}</a>
      </Link>
    </div>
  );
}
