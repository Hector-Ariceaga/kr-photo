import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import fadeIn from 'react-animations/lib/fade-in';
import { fadeInDown } from 'react-animations'
import { pulse } from 'react-animations'

export const Site = styled.div`
  max-width: 50em;
  margin: 0 auto;
`

export const Header = styled.section`
  text-align: center;
  `;

export const NavWrapper = styled.div`
  text-align: center;
  padding-bottom: 2em
`

export const Links = styled.div`
  max-width: 50em;
  border-top: 1px solid lightgray;
  padding-top: 10px;
  font-size: 1.3em
  text-align: center;
`

export const StyledLink = styled(NavLink)`
  display: block;
  color: gray;
  &:hover {color: lightgray};
  &.active {
    color: #BC9B5D;
    animation: 1s ${keyframes `${fadeInDown}`} 1;
  }
  text-decoration: none;
  text-align: center;
  font-family: 'Cormorant Garamond'
`;

export const SocialLinks = styled.div`
  text-align: center;
  padding-bottom: 0.5em;
`
export const SocialLink = styled.img`
  height: 12%;
  width: 12%;
  margin-right: 0.5em;
  &:hover {
    animation: 1s ${keyframes `${pulse}`} 1;
  }
`

export const Logo = styled.img`
  width: 50%;
  height: 50%;
  padding-bottom: 0.5em;
`
export const PageContent = styled.div`
  margin-top: -2.5em;
  margin-left: 1em;
  margin-right: 1em;
`
export const TallImagePreview = styled.img`
  width: 50%
  display: flex;
  &:first-of-type {
    margin-right: 1em;
  }
`
export const TwoPortrait = styled.div`
  width: auto;
  padding-top: 1em;
  display: flex;
`
export const Tag = styled.h6`

`
export const Subtitle = styled.h3`
  margin-top: -1em;
  color: #BC9B5D;
`

export const Description = styled.p`
  margin-top: -1em;
  margin-bottom: -0.25em;
`