import React from 'react';
import { FooterSection } from '../assets/styleSheets/theme.js'

const Footer = () => {
  return (
    <FooterSection>
      <ul>
        <li>Facebook and Instagram icons made by <a href="https://www.flaticon.com/authors/bogdan-rosu">Bogdan Rosu</a> from flaticon.com</li>
        <li>All photos by Krystina Jermaczonak</li>
        <li>Website design by <a href="https://techector.com">Hector Ariceaga</a> {'\u00A9'} 2019</li>
      </ul>        
    </FooterSection>
  )
}

export default Footer;