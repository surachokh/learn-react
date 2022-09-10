import React from "react";
import styled from "styled-components";

const Frame = styled.img`
  border-radius: 50%;
  width: ${(props) => props.size ?? "240px"};
  height: ${(props) => props.size ?? "240px"};
  object-fit: contain;
`;

export default function ImageCover(props) {
  return <Frame src={props.children} alt={props.alt} size={props.size} />;
}
