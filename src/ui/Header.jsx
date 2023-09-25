import styled from "styled-components";

const Header = styled.h1`
  color: var(--color-neutral-off-black);
  margin-top: 12rem;
  font-size: clamp(3rem, 2.5vw, 3rem);

  @media (min-width: 770px) {
    text-align: left;
    padding-left: 40px;
    margin-top: 10rem;
  }
`;

export default Header;
