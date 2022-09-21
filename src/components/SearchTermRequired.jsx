import React from "react";
import styled from "styled-components";

function SearchTermRequired() {
  return (
    <Container>
      <Text>검색어를 입력해주세요</Text>
    </Container>
  );
}

export default SearchTermRequired;

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
