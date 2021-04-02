import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4em;
  margin-left: 2em;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  background: var(--green, black);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5em 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-coluns: auto 1fr
    justify-content: space-between;
    align-items: center
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Nifty Giftys</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
