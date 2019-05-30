import React, { Component } from 'react';
import { PageContent, TallImagePreview } from '../assets/styleSheets/theme.js'
import image1 from '../assets/images/image1.webp'

export default class Home extends Component {
  render() {
    return(
      <PageContent>
        <TallImagePreview src={image1} alt="wedding photo" />
      </PageContent>
    )
  }
}