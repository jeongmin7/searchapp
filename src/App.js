import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavigationBar from "./components/NavigationBar";
import AllResult from "./components/Results/AllResult";
import SearchInput from "./components/SearchInput";
import NewsResult from "./components/Results/NewsResult";
import ImageResult from "./components/Results/ImageResult";
import NotFound from "./pages/NotFound"
function App() {
  return (
    <Container>
      <InputContainer>
        <SearchInput />
        <NavigationBar />
      </InputContainer>
      <Routes>
        <Route path="/" element={<Navigate to="/all" />} />
        <Route path="/news" element={<NewsResult />} />
        <Route path="/image" element={<ImageResult />} />
        <Route path="/all" element={<AllResult />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Container>
  );
}

export default App;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;
