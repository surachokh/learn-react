import React from "react";
import styled from "styled-components";

const Frame = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

export default function ImageCover(props) {
  return <Frame src={props.children} alt={props.alt} />;
}
