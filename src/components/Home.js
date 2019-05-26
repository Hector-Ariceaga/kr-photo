import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
  `;

const Bounce = styled.div`animation: 4s ${keyframes `${bounce}`} 2`

export default class Home extends Component {
  render() {
    return(
      <Wrapper>
        <Bounce><h1>KR Photo</h1></Bounce>
      </Wrapper>
    )
  }
}