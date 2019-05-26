import React from 'react';
import facebook_icon from '../assets/images/facebook_icon.svg';
import instragram_icon from '../assets/images/instagram_icon.svg'
import { Header, Wrapper, Links, StyledLink, SocialLinks, SocialLink, Logo } from '../assets/styleSheets/theme'

const NavBar = () => {
  return (
    <Wrapper>
      <SocialLinks>
          <a href="https://www.facebook.com/krystinarosephotography/">
            <SocialLink src={facebook_icon} />
          </a>
          <a href='https://www.instagram.com/krystinarosephotography/'>
            <SocialLink src={instragram_icon} />
          </a>
        </SocialLinks>
      <Header>
        <Logo>Logo</Logo>
        
        <Links>
          <StyledLink to='/' exact>Home</StyledLink>
          <StyledLink to='/sessions' exact>Sessions</StyledLink>
          <StyledLink to='/portfolio' exact>Portfolio</StyledLink>
          <StyledLink to='/about' exact>About Us</StyledLink>
          <StyledLink to='/contact' exact>Contact Us</StyledLink>
        </Links>
      </Header>
    </Wrapper>
  )
}

export default NavBar;