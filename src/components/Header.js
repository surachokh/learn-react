import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

const animations = keyframes`
    0% {
      width: 40%;
    }
    100% {
        width: 100%;
    }
`;

const Text = styled.a`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-right: 16px;
  color: #098100;
  text-decoration: none;
`;

const Title = styled.div`
  text-align: center;
  width: 100%;
  animation-name: ${animations};
  animation-duration: 3.5s;
  animation-iteration-count: 1;
`;

export default function Header() {
  return (
    <Wrapper>
      <Title>
        <Text href="/">Surachok's Profile</Text>
      </Title>
    </Wrapper>
  );
}
