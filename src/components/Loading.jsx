import React from "react";
import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";

function Loading() {
  return (
    <Container>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto
`;
export default Loading;
