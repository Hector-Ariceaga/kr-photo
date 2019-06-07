import React, { Component } from 'react';
import { PageContent, TwoPortrait, TallImageContainer, TallImagePreview } from '../assets/styleSheets/theme'
import buildSection from '../components/buildSection';
import boudoir from '../assets/images/boudoir.webp'
import family_gallery from '../assets/images/family_gallery.webp'
import portraits_gallery from '../assets/images/portraits_gallery.webp'
import weddings_and_events from '../assets/images/weddings_and_events_gallery.webp'

export default class Portfolio extends Component{
  render() {

    const portfolio = buildSection(
      "Portfolio",
      "Take a look and see what we do",
      "Our portfolios show just some of our work that we take great pride in. If you are looking to preview anything specifically, we can provide galleries that fit exactly what you're looking for."
    )

    return(
      <PageContent>

        {portfolio}

        <TwoPortrait>
          <TallImageContainer inputWidth="48%">
            <TallImagePreview src={boudoir} alt="buodoir photo" />
            Buodoir
          </TallImageContainer>
          <TallImageContainer inputWidth="48%">
            <TallImagePreview src={family_gallery} alt="family photo" />
            Family
          </TallImageContainer>
          </TwoPortrait>
          <TwoPortrait>
            <TallImageContainer inputWidth="48%">
              <TallImagePreview src={portraits_gallery} alt="portrait photo" />
              Portraits
            </TallImageContainer>
            <TallImageContainer inputWidth="48%">
              <TallImagePreview src={weddings_and_events} alt="wedding photo" />
              Weddings and Events
            </TallImageContainer>
          </TwoPortrait>
      </PageContent>
    )
  }
}
