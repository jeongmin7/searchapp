import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loading from "../Loading";
import styled from "styled-components";
import SearchedResult from "./SearchedResult";
import SearchTermRequired from "../SearchTermRequired";
const api = process.env.REACT_APP_API_BASE_URL;
const api_key = process.env.REACT_APP_API_KEY;
function NewsResult() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("q");

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [limit, setLimit] = useState(5);
  //한페이지 당 게시물 개수
  const [page, setPage] = useState(1);
  //페니지
  const offset = (page - 1) * limit;
  //해당 페이지의 첫 계시물 위치계산
  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${api}/news/q=${search}&num=50`, {
        headers: {
          "X-RapidAPI-Key": `${api_key}`,
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      })
      .then((res) => {
        setData(res.data.entries);
        setIsLoading(false);
      });
  };

  useEffect(getData, [search]);
  if (!search) {
    return <SearchTermRequired />;
  }

  return (
    <Container>
      {isLoading ? <Loading /> : <SearchedResult data={data} />}
    </Container>
  );
}

export default NewsResult;
const Container = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
`;
