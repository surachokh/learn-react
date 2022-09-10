import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
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
