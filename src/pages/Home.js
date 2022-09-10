import React, { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [menuList] = useState([
    "Profile",
    "Education",
    "Work Experience",
    "Contact",
  ]);

  return (
    <>
      <Header>{menuList}</Header>
    </>
  );
}
