import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

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
      <Home />
    </>
  );
}
