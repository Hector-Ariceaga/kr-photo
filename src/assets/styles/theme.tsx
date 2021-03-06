import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
import { pulse } from "react-animations";

/////////////////////global
export const Site = styled.div`
  max-width: 50em;
  margin: 0 auto;
  font-size: 1rem;
`;

export const NavWrapper = styled.header`
  text-align: center;
  padding-bottom: 2em;
`;

export const FooterSection = styled.footer`
  padding: 0.1em 0em;
  height: auto;
  width: 100%;
  background: #dbb89a;
  text-align: center;
  li {
    list-style-type: none;
    font-family: "Lateef";
    font-size: 1em;
    padding-bottom: 0.1em;
  }
`;

export const FooterLink = styled.a`
  padding-bottom: 0.5em;
  &:visited {
    color: black;
  }
`;

export const Logo = styled.img`
  width: 50%;
  height: 50%;
  padding-bottom: 0.5em;
`;

export const PageContent = styled.div`
  margin-top: -2.5em;
  margin-left: 1em;
  margin-right: 1em;
`;
//////////////////////

export const Links = styled.div`
  max-width: 50em;
  border-top: 1px solid lightgray;
  padding-top: 10px;
  font-size: 1.3em;
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
  padding-bottom: 0.5em;
`;

export const SocialLink = styled.img`
  max-height: 12%;
  max-width: 12%;
  margin-right: 0.5em;
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
  padding-bottom: 0.5em;
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
  padding-top: 1em;
  justify-content: space-between;
`;

export const FourPortrait = styled(TwoPortrait)``;

export const LandscapeImageContainer = styled.div`
  display: flex;
  margin: auto;
  width: auto;
  justify-content: center;
  padding: 1em 0em;
`;

export const LandscapeImage = styled.img`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Tag = styled.h6`
  font-family: "Montserrat";
`;

export const Subtitle = styled.h3`
  margin-top: -0.4em;
  margin-bottom: 0.5em;
  color: #bc9b5d;
  font-family: "EB Garamond";
  font-size: 2em;
  font-style: italic;
`;

export const Description = styled.p`
  margin-top: -1em;
`;

export const ContentSection = styled.section`
  &:first-of-type {
    margin-top: -1em;
  }
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -0.25em;
`;

export const SessionContentSection = styled(ContentSection)`
  padding-top: 1em;
  text-align: center;
`;

export const Author = styled.p`
  margin-top: -1em;
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
