import React, { Component } from 'react';
import { PageContent, TallImagePreview, TwoPortrait, Tag, Subtitle, Description } from '../assets/styleSheets/theme.js'
import image1 from '../assets/images/image1.webp'
import image2 from '../assets/images/image2.webp'

export default class Home extends Component {
  render() {
    return(
      <PageContent>

        <Tag>OUR GOAL</Tag>
        <Subtitle>Capture each and every beautiful moment</Subtitle>
        <Description>These days it's so easy to pull out your phone and take a photo, 
          but you aren't able to be in the moment. Our goal at Krystina Rose Photography 
          is to allow you to enjoy those memories to the fullest and let us capture them 
          so you can cherish them for a lifetime.</Description>

        <TwoPortrait>
          <TallImagePreview src={image1} alt="wedding photo" />
          <TallImagePreview src={image2} alt="mansion exterior" />
        </TwoPortrait>
        

      </PageContent>
    )
  }
}