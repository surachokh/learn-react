import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: palevioletred;
  opacity: 0.5;
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.h1`
  font-size: 1em;
  text-align: center;
  margin-right: 8px;
`;

const Title = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function Header(props) {
  return (
    <Wrapper>
      <Title>
        <Text>Surachok's Profile</Text>
      </Title>
      <Menu>
        {props.children.map((menu) => (
          <Text>{menu}</Text>
        ))}
      </Menu>
    </Wrapper>
  );
}
