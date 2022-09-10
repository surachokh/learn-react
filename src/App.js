import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./pages/Home";

const AppWrapper = styled.div`
  padding: 36px 240px;
`;

export default function App() {
  return (
    <>
      <Header />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppWrapper>
    </>
  );
}
