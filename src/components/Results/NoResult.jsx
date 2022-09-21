import React from "react";
import styled from "styled-components";

function NoResult() {
  return (
    <Container>
      <Text>검색결과 없음 </Text>
    </Container>
  );
}

export default NoResult;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 77vh;
`;
const Text = styled.p`
  font-size: 1.5rem;
  color: #333;
`;
