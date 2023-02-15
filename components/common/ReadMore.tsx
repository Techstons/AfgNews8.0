import React from "react";
import styled from "@emotion/styled";
import { Button } from "@components/ui";

const ReadMore = ({
  jobTitle,
  jobDesc,
}: {
  jobTitle: string;
  jobDesc: string;
}) => {
  return (
    <MainContainer>
      <h1>{jobTitle}</h1>
      <DescripContainer>
        <p>{jobDesc}</p>
      </DescripContainer>
    </MainContainer>
  );
};

const ButtonsContainer = styled.div`
  margin: 4rem 0 0 0;
`;

const DescripContainer = styled.div`
  width: 60%;
  margin: 4rem 0 0 0;

  & p {
    line-height: 2rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: space-between;
  animation: slide-in 0.8s ease-in-out;

  @keyframes slide-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & h1 {
    color: var(--primary-color);
    font-size: 3rem;
  }
`;

export default ReadMore;
