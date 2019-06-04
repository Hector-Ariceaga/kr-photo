import React from 'react';
import { FooterSection, FooterLink } from '../assets/styleSheets/theme.js'

const Footer = () => {
  return (
    <FooterSection>
      <ul>
        <li>Facebook and Instagram icons made by <FooterLink href="https://www.flaticon.com/authors/bogdan-rosu">Bogdan Rosu</FooterLink> from flaticon.com</li>
        <li>All photos by Krystina Jermaczonak</li>
        <li>Website design by <FooterLink href="https://techector.com">Hector Ariceaga</FooterLink> {'\u00A9'} 2019</li>
      </ul>        
    </FooterSection>
  )
}

export default Footer;