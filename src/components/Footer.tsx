import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

import { theme } from "../assets/styles";

export const Footer = () => {
  return (
    <FooterSection>
      {"\u00A9"} 2021 Krystina Rose Photography - All Rights Reserved
      <SocialLinkWrapper>
        |
        <a href="https://www.facebook.com/krystinarosephotography/">
          <SocialLink src="/img/facebook-round.png" alt="facebook icon" />
        </a>
        <a href="https://www.instagram.com/krystinarosephotography/">
          <SocialLink src="/img/instagram-round.png" alt="instagram icon" />
        </a>
        |
      </SocialLinkWrapper>
      Designed by Hector Ariceaga
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem 0em;
  height: auto;
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  font-family: ${theme.fonts.secondary};
`;

const SocialLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.25rem;

    &:first-of-type {
      margin-left: 0.25rem;
    }
  }
`;

const SocialLink = styled.img`
  max-width: 1.25rem;

  &:hover {
    animation: 1s ${keyframes`${pulse}`} 1;
  }
`;
