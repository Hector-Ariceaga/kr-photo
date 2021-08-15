import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
import { pulse } from "react-animations";

/////////////////////global
export const Site = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  font-size: 1rem;
`;

export const NavWrapper = styled.header`
  text-align: center;
`;

export const FooterSection = styled.footer`
  padding: 0.1rem 0em;
  height: auto;
  width: 100%;
  background: #dbb89a;
  text-align: center;

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    font-family: "Lateef";
    font-size: 1rem;
    padding-bottom: 0.1rem;
  }
`;

export const FooterLink = styled.a`
  padding-bottom: 0.5rem;

  &:visited {
    color: black;
  }
`;

export const Logo = styled.img`
  width: 50%;
  height: 50%;
  padding-bottom: 0.5rem;
`;

export const PageContent = styled.div`
  margin-left: 0 1rem;
`;

export const theme = {
  breakpoints: {
    desktop: "1024px",
    aboveDesktop: "1025px",
    tablet: "768px",
    aboveTablet: "769px",
    mobile: "320px",
    aboveMobile: "321px",
  },
  colors: {
    lightTan: "#EDE4D9",
  },
  fonts: {
    primary: "Cormorant Garamond",
    secondary: "serif",
  },
};
//////////////////////

export const Links = styled.div`
  max-width: 50rem;
  border-top: 1px solid lightgray;
  padding-top: 10px;
  font-size: 1.3rem;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: gray;
  &:hover {
    color: lightgray;
  }
  &.active {
    color: #bc9b5d;
    animation: 1s ${keyframes`${fadeInDown}`} 1;
  }
  text-decoration: none;
  text-align: center;
  font-family: "Cormorant Garamond";
`;

export const SocialLinks = styled.div`
  text-align: center;
  padding-bottom: 0.5rem;
`;

export const SocialLink = styled.img`
  max-width: 2rem;
  margin-right: 0.5rem;

  &:hover {
    animation: 1s ${keyframes`${pulse}`} 1;
  }
`;

type AspectProps = {
  inputHeight?: string;
  inputWidth?: string;
};

export const TallImageContainer = styled.div<AspectProps>`
  height: ${(props) => props.inputHeight || "48%"};
  width: ${(props) => props.inputWidth || "48%"};
  font-size: 110%;
  text-align: center;
  font-style: italic;
  padding-bottom: 0.5rem;
`;
export const TallImagePreview = styled.img<AspectProps>`
  display: flex;
  height: ${(props) => props.inputHeight || "100%"};
  width: ${(props) => props.inputWidth || "100%"};
`;
export const TwoPortrait = styled.div`
  display: flex;
  margin: auto;
  height: auto;
  width: auto;
  padding-top: 1rem;
  justify-content: space-between;
`;

export const FourPortrait = styled(TwoPortrait)``;

export const LandscapeImageContainer = styled.div`
  display: flex;
  margin: auto;
  width: auto;
  justify-content: center;
  padding: 1rem 0rem;
`;

export const LandscapeImage = styled.img`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Tag = styled.h4`
  font-family: "Montserrat";
`;

export const Subtitle = styled.h3`
  color: #bc9b5d;
  font-family: "EB Garamond";
  font-size: 2rem;
  font-style: italic;
`;

export const Description = styled.p`
  display: block;
`;

export const ContentSection = styled.section`
  margin-left: auto;
  margin-right: auto;
`;

export const SessionContentSection = styled(ContentSection)`
  padding-top: 1rem;
  text-align: center;
`;

export const Author = styled.p`
  font-weight: bold;
`;

export const Bold = styled.span`
  font-weight: bold;
`;
export const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: italic;
  text-align: center;
  border: 1px solid black;
`;
