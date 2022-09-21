import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loading from "../Loading";
import styled from "styled-components";
import SearchTermRequired from "../SearchTermRequired";

const api = process.env.REACT_APP_API_BASE_URL;
const api_key = process.env.REACT_APP_API_KEY;

function ImageResult() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("q");

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${api}/image/q=${search}&num=50`, {
        headers: {
          "X-RapidAPI-Key": `${api_key}`,
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      })
      .then((res) => {
        setData(res.data.image_results);
        setIsLoading(false);
      });
  };

  useEffect(getData, [search]);
  if (!search) {
    return <SearchTermRequired />;
  }

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <ImageContianer>
          {data.map((photo, idx) => (
            <div key={idx}>
              <img
                src={photo.image?.src}
                alt="사진"
                // onClick={() => {
                //   window.open(`${photo.image.href}`, "_blank");
                // }}
              />
            </div>
          ))}
        </ImageContianer>
      )}
    </Container>
  );
}

export default ImageResult;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const ImageContianer = styled.div`
  width: 80%;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4rem;
`;
