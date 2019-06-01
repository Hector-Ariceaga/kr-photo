import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import { pulse } from 'react-animations';

export const Site = styled.div`
  max-width: 50em;
  margin: 0 auto;
`

export const NavWrapper = styled.header`
  text-align: center;
  padding-bottom: 2em
`

export const FooterSection = styled.footer`
  display: block;
  height: auto;
  width: 100%;
  background: #DBB89A;
  text-align: center;
  li {
      list-style-type:none
      padding: 0.25em;
    }
  }
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
  max-height: 12%;
  max-width: 12%;
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
  display: flex;
  height: 48%
  width: 48%;
`
export const TwoPortrait = styled.div`
  display: flex;
  margin: auto;
  width: auto;
  padding-top: 1em;
  justify-content: space-between;
`
export const Tag = styled.h6`
  font-family: 'Montserrat'
`
export const Subtitle = styled.h3`
  margin-top: -0.4em;
  margin-bottom: 0.5em;
  color: #BC9B5D;
  font-family: 'Tangerine';
  font-size: 2.5em;
`

export const Description = styled.p`
  margin-top: -1em;
`

export const ContentSection = styled.section`
  &:first-of-type {
    margin-top: -1em;
  }
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -0.25em;
`
export const Quote = styled.p`
  
`

export const Author = styled.p`
  margin-top: -1em;
  font-weight: bold;
`