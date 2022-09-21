import axios from "axios";
import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SearchedResult from "./SearchedResult";
import SearchTermRequired from "../SearchTermRequired";
import Loading from "../Loading";

const api = process.env.REACT_APP_API_BASE_URL;
const api_key = process.env.REACT_APP_API_KEY;

function AllResult() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("q");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${api}/search/q=${search}&num=50`, {
        headers: {
          "X-RapidAPI-Key": `${api_key}`,
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      })
      .then((res) => {
        setData(res.data.results);
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

export default AllResult;

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
`;
