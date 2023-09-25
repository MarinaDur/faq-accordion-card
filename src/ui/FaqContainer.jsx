import styled from "styled-components";
import { Image } from "./Image";
import Header from "./Header";
import Question from "./Question";
import { faq } from "../data/data";
import { useState } from "react";

const StyledFaqContainer = styled.div`
  margin: 0;

  width: 90%;
  max-width: 1000px;
  background: var(--color-neutral-white);
  text-align: center;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledCon = styled.div`
  max-width: 600px;
`;
const StyledFaq = styled.div`
  padding: 1.5rem 4rem;
  margin: 0;

  @media (min-width: 480px) {
    padding: 1.5rem 8rem;
  }
  @media (min-width: 770px) {
    padding: 1.5rem 4rem;
    margin-bottom: 3rem;
  }
`;

function FaqContainer() {
  const [openQ, setOpenQ] = useState(1);

  function handleToggle(id) {
    setOpenQ(id);
  }
  return (
    <StyledFaqContainer>
      <StyledCon>
        <Image />
      </StyledCon>
      <StyledCon>
        <Header>FAQ</Header>
        <StyledFaq>
          {faq.map((qa) => (
            <Question
              onClick={() => handleToggle(qa.id)}
              qa={qa}
              key={qa.id}
              id={qa.id}
              openQ={openQ}
              setOpenQ={setOpenQ}
            />
          ))}
        </StyledFaq>
      </StyledCon>
    </StyledFaqContainer>
  );
}

export default FaqContainer;
