import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import fadeIn from 'react-animations/lib/fade-in';

export const Header = styled.section`
  text-align: center;
  `;

export const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 2em
`

export const Links = styled.div`
  border-top: 1px solid lightgray;
  padding-top: 10px;
  font-size: 1.5em
`

export const StyledLink = styled(Link)`
  color: gray;
  &:hover {color: lightgray};
  text-decoration: none;
  margin-right: 100px;
  font-family: 'Josefin Sans'
`;

export const SocialLinks = styled.div`
  float: right;
  text-align: right;
`
export const SocialLink = styled.img`
  margin-right: 
`

export const FadeIn = styled.div`
  padding-top: 2em;
  text-align: center;
  animation: 4s ${keyframes `${fadeIn}`} 1;
`