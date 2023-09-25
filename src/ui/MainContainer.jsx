import styled from "styled-components";
import FaqContainer from "./FaqContainer";

const StyledMainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(101, 101, 231, 1) 0%,
    rgba(175, 103, 233, 1) 70%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MainContainer() {
  return (
    <StyledMainContainer>
      <FaqContainer />
    </StyledMainContainer>
  );
}

export default MainContainer;
