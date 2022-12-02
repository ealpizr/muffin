import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Muffin</h1>
      <nav>
        <Link href="https://github.com/ealpizr/muffin">Github</Link>
      </nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: blue;
  }
`;

export default Header;
