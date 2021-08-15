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
        <Logo src={KRP_Logo} alt="logo" />
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

export const NavWrapper = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  font-size: 1.3rem;
  text-align: center;
`;

export const Logo = styled.img`
  height: 6rem;
  width: 10rem;
  margin: 0 2rem;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: ${theme.colors.grey};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  margin: 0 3rem;
  font-weight: 500;

  &:hover {
    color: ${theme.colors.lightGrey};
  }
  &.active {
    color: #bc9b5d;
    animation: 1s ${keyframes`${fadeInDown}`} 1;
  }
`;
