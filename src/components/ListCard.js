import React from "react";
import styled from "styled-components";
import ImageCover from "./ImageCover";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: ${(props) => (props.border ? "1px solid #eee" : "")};
  border-radius: 16px;
  padding: 24px;
  box-shadow: ${(props) => (props.border ? "3px 3px 10px #eeeeee" : "")};
  flex-basis: min-content;
  flex-grow: 1;
  margin-left: ${(props) => (props.border ? "16px" : "")};
  &:first-child {
    margin-left: 0px;
  }
`;

const Title = styled.div`
  font-size: ${(props) => (props.border ? "24px" : "20px")};
  margin: 16px 0px;
  color: #098100;
  font-weight: 600;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 32px;
  width: 100%;
  text-align: ${(props) => (props.border ? "center" : "left")};
  color: #444;
`;

export default function ListCard(props) {
  return (
    <Wrapper border={props.border}>
      {props.img && <ImageCover size="120px">{props.img}</ImageCover>}
      <Title border={props.border}>{props.title}</Title>
      <ContentWrapper border={props.border}>
        {props.contents.map((content) =>
          props.border ? <label>{content}</label> : <li>{content}</li>
        )}
      </ContentWrapper>
    </Wrapper>
  );
}
