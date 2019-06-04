import React from 'react';
import { ContentSection, Quote, Author} from '../assets/styleSheets/theme.js'

const buildQuote = (id, quote, author) => {
  return (
    <ContentSection key={id}>
      <Quote>"{quote}"</Quote>
      <Author>-{author}</Author>
    </ContentSection>
    
  )
}

export default buildQuote;