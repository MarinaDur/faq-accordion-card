import styled, { css } from "styled-components";

const StyledImageS = styled.img`
  width: 70%;
  max-width: 280px;
  position: absolute;
  left: 50%;

  ${(props) =>
    props.type === "s-main"
      ? css`
          transform: translate(-50%, -60%);
        `
      : ""}

  ${(props) =>
    props.type === "s-shadow"
      ? css`
          transform: translate(-50%, 0);
        `
      : ""}
`;

function Image() {
  //   if (type === "s-main") return <ImageMain src={src} alt="illustration main" />;
  //   if (type === "s-shadow")
  //     return <ImageShadow src={src} alt="illustration shadow" />;
  return (
    <>
      <StyledImageS
        type="s-main"
        alt="illustration women"
        src="illustration-woman-online-mobile.svg"
      />
      <StyledImageS
        type="s-shadow"
        alt="illustration shadow"
        src="bg-pattern-mobile.svg"
      />
    </>
  );
}

export { Image };
