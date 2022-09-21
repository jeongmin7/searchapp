import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

function SearchInput() {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchText(searchParams.get("q"));
  }, [searchParams]);
  const onChangeInput = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);
  const onKeyUp = useCallback(
    (e) => {
      if (e.key === "Enter" && e.target.value.trim().length > 0) {
        setSearchParams({ q: e.target.value });
      }
    },
    [setSearchParams]
  );

  return (
    <div>
      <Input
        value={searchText || ""}
        type="text"
        placeholder="검색어를 입력해주세요"
        onChange={onChangeInput}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}

export default SearchInput;

const Input = styled.input`
  width: 25rem;
  height: 3rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 5rem;
  &:hover {
    cursor: pointer;
  }
`;
