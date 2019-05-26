import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import fadeIn from 'react-animations/lib/fade-in';
import { fadeInDown } from 'react-animations'
import { pulse } from 'react-animations'

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

export const StyledLink = styled(NavLink)`
  color: gray;
  &:hover {color: lightgray};
  &.active {
    color: #BC9B5D;
    animation: 1s ${keyframes `${fadeInDown}`} 1;
  }
  text-decoration: none;
  margin-right: 100px;
  font-family: 'Josefin Sans'
`;

export const SocialLinks = styled.div`
  display: in-line;
  text-align: right;
  margin-right: 1em;
`
export const SocialLink = styled.img`
  margin-right: 1em;
  &:hover {
    animation: 1s ${keyframes `${pulse}`} 1;
  }
`

export const Logo = styled.div`
  padding-bottom: 3em;
  text-align: center;
  animation: 5s ${keyframes `${fadeIn}`} 1;
`
