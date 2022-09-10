import React from "react";
import styled from "styled-components";
import ImageCover from "./ImageCover";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.border ? "1px solid #eee" : "")};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 3px 3px 10px #eeeeee;
  margin-bottom: 16px;
`;

const Content = styled.p`
  margin-top: 36px;
  line-height: 32px;
  color: #444;
`;

export default function Card(props) {
  return (
    <Wrapper border={props.border}>
      {props.img && <ImageCover>{props.img}</ImageCover>}
      <Content>{props.content}</Content>
    </Wrapper>
  );
}
