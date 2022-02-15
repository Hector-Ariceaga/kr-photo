import styled, { createGlobalStyle } from "styled-components";

/////////////////////global

export const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond|Montserrat|EB+Garamond|Tangerine|Lateef&display=swap');
    font-family:'Cormorant Garamond', 'Montserrat', 'Tangerine', 'Lateef', 'EB Garamond', sans-serif, cursive;
    
  }

  * body {
    margin: 0;

    #root {
      min-height: 100vh;
      padding-bottom: 4rem;
      position: relative;
    }
  }
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
    grey: "grey",
    lightGrey: "lightGrey",
  },
  fonts: {
    primary: "Cormorant Garamond",
    secondary: "Montserrat",
  },
};

export const Site = styled.div`
  font-size: 1rem;
  padding: 0 2rem;
`;

export const FooterLink = styled.a`
  padding-bottom: 0.5rem;

  &:visited {
    color: black;
  }
`;

export const Page = styled.div`
  @media only screen and (min-width: ${theme.breakpoints.aboveDesktop}) {
    margin: 0 5rem;
  }
`;

//////////////////////

export const SocialLinks = styled.div`
  text-align: center;
  padding-bottom: 0.5rem;
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
