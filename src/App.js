import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const AppWrapper = styled.div`
  padding: 36px 120px;
`;

export default function App() {
  const [menuList] = useState([
    "Profile",
    "Education",
    "Experience",
    "Contact",
  ]);
  return (
    <>
      <Header>{menuList}</Header>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppWrapper>
    </>
  );
}
