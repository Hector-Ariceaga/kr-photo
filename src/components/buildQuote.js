import React from 'react';
import { ContentSection, Quote, Author} from '../assets/styleSheets/theme.js'

const buildQuote = (quote, author) => {
  return (
    <ContentSection>
      <Quote>"{quote}"</Quote>
      <Author>-{author}</Author>
    </ContentSection>
    
  )
}

export default buildQuote;