import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

function SearchInput() {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchText(searchParams.get("q"));
  }, [searchParams]);
  const onChangeInput = (e) => {
    setSearchText(e.target.value);
  };
  const onKeyUp = (e) => {
    if (e.key === "Enter" && e.target.value.trim().length > 0) {
      setSearchParams({ q: e.target.value });
    }
  };

  return (
    <div>
      <input
        value={searchText}
        type="text"
        className="w-96 h-11 bg-slate-50 border outline-none p-6 text-black mt-10 shadow-md hover:shadow-lg"
        placeholder="검색어를 입력해주세요"
        onChange={onChangeInput}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}

export default SearchInput;
