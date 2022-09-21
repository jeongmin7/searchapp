import React from "react";
import styled from "styled-components";
function NotFound() {
  return (
    <Container>
      <ErrorMsg>
        <h1>404 Error</h1>
        <div>요청하신 페이지를 찾을 수 없습니다.</div>
      </ErrorMsg>
    </Container>
  );
}

export default NotFound;

const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  height: 70vh;
  margin: auto;
`;

const ErrorMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
