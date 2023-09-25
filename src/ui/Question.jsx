import styled, { css } from "styled-components";

const StyledQContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
`;

const StyledParagraph = styled.p`
  font-size: clamp(12px, 1.5vw, 1.8rem);
  text-align: left;

  ${(props) =>
    props.type
      ? css`
          font-weight: 700;
        `
      : css`
          font-weight: 400;
        `}

  &:hover {
    color: var(--text-color-soft-red);
  }
  ${(props) =>
    props.type === "par"
      ? css`
          margin-top: 6px;
          font-weight: 400;
          font-size: clamp(11px, 1.4vw, 1.7rem);
          min-width: 200px;
          max-width: 800px;
          color: var(--text-color-grayish-blue);
        `
      : css`
          margin-top: 0;
        `}
`;

const StyledArrow = styled.img`
  width: 9px;
  height: 7px;

  ${(props) =>
    props.type
      ? css`
          rotate: 180deg;
        `
      : css`
          rotate: 0deg;
        `}
`;

const StyledHr = styled.div`
  width: 100%;
  height: 1px;
  background: var(--divider-color-light-grayish-blue);
  margin-top: 10px;
  margin-bottom: 10px;
`;

function Question({ qa, openQ, setOpenQ }) {
  const isClicked = qa.id === openQ;

  function handleClick() {
    if (isClicked) {
      setOpenQ(null);
    } else {
      setOpenQ(qa.id);
    }
  }
  return (
    <>
      <StyledQContainer onClick={handleClick}>
        <StyledParagraph type={isClicked}>{qa.q}</StyledParagraph>
        <StyledArrow
          src="icon-arrow-down.svg"
          alt="arrow icon"
          type={isClicked}
        />
      </StyledQContainer>
      {isClicked ? <StyledParagraph type="par">{qa.a}</StyledParagraph> : ""}
      {/* <StyledParagraph type="par" className={isClicked ? "show" : "close"}>
        {qa.a}
      </StyledParagraph> */}
      <StyledHr />
    </>
  );
}

export default Question;
