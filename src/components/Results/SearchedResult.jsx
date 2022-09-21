import React, { useState } from "react";
import styled from "styled-components";
import NoResult from "./NoResult";
import Pagination from "./Pagination";

function SearchedResult({ data }) {
  const [limit, setLimit] = useState(5);
  //한페이지 당 게시물 개수
  const [page, setPage] = useState(1);
  //페니지
  const offset = (page - 1) * limit;
  //해당 페이지의 첫 계시물 위치계산
  return (
    <Container>
      {data?.length > 0 ? (
        data?.slice(offset, offset + limit).map((item, index) => (
          <NewsContainer
            key={index}
            onClick={() => {
              window.open(`${item.link}`, "_blank");
            }}
          >
            <div>
              <div className="link">{item.link}</div>
              <div className="title">{item.title}</div>
              <p className="description">{item.description}</p>
            </div>
          </NewsContainer>
        ))
      ) : (
        <NoResult />
      )}

      <Pagination
        total={data?.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </Container>
  );
}

export default SearchedResult;
const Container = styled.div`
  width: 80%;
  margin: auto;
`;
const NewsContainer = styled.div`
  width: 80%;
  border: 1px solid #cccccc;
  padding: 2rem;
  margin: 2rem;
  .title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1515ff;
    &:hover {
      text-decoration: underline;
    }
  }
  .source {
    color: #555;
    font-size: 1rem;
  }
  .data {
    font-size: 0.8rem;
  }
`;
