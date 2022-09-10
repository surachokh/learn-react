import React from "react";
import styled from "styled-components";
import ImageCover from "./ImageCover";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 3px 3px 10px #eeeeee;
  margin-bottom: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 32px;
  color: #444;
`;
const Title = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
  color: #098100;
  font-weight: 600;
`;

export default function ParagraphCard(props) {
  return (
    <Wrapper>
      <div style={{ padding: "24px" }}>
        <ImageCover>{props.img}</ImageCover>
      </div>
      <Content>
        <Title>{props.title}</Title>
        {props.contents.map((content) => (
          <div>{content}</div>
        ))}
      </Content>
    </Wrapper>
  );
}
