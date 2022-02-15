import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

import KRP_Logo from "../assets/images/KRP_Logo.png";
import { theme } from "../assets/styles";

export const NavBar = () => {
  return (
    <NavWrapper>
      <Links>
        <StyledLink to="/" exact>
          Home
        </StyledLink>
        <StyledLink to="/about" exact>
          About
        </StyledLink>
        <StyledLink to="/portfolio" exact>
          Portfolio
        </StyledLink>
        <Logo>
          <img src={KRP_Logo} alt="logo" />
        </Logo>
        <StyledLink to="/journal" exact>
          Journal
        </StyledLink>
        <StyledLink to="/info" exact>
          Info
        </StyledLink>
        <StyledLink to="/contact" exact>
          Contact
        </StyledLink>
      </Links>
    </NavWrapper>
  );
};

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  font-size: 1.3rem;
  text-align: center;
  max-width: 75rem;
  width: 100%;
`;

export const Logo = styled.div`
  height: 6rem;
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: ${theme.breakpoints.aboveTablet}) {
    width: auto;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: ${theme.colors.grey};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 500;

  &:hover {
    color: ${theme.colors.lightGrey};
  }

  &.active {
    color: #bc9b5d;
    animation: 1s ${keyframes`${fadeInDown}`} 1;
  }

  @media only screen and (min-width: ${theme.breakpoints.aboveTablet}) {
    font-size: 1.125rem;
  }

  @media only screen and (min-width: ${theme.breakpoints.aboveDesktop}) {
    font-size: inherit;
  }
`;

export const NavWrapper = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;

  ${StyledLink} {
    display: none;

    @media only screen and (min-width: ${theme.breakpoints.aboveTablet}) {
      display: block;
    }
  }
`;
