import React from 'react';
import { ContentSection, Tag, Subtitle,} from '../assets/styleSheets/theme.js'

const buildSection = (tag, subtitle, section) => {
  return (
    <ContentSection>
      <Tag>{tag}</Tag>
      <Subtitle>{subtitle}</Subtitle>
      {section}
    </ContentSection>
    
  )
}

export default buildSection;