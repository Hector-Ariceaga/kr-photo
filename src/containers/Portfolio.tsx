import React, { Component } from "react";
import {
  Page,
  TwoPortrait,
  TallImageContainer,
  TallImagePreview,
} from "../assets/styles/theme";
import { Section } from "../components";
import boudoir from "../assets/images/boudoir.webp";
import family_gallery from "../assets/images/family_gallery.webp";
import portraits_gallery from "../assets/images/portraits_gallery.webp";
import weddings_and_events from "../assets/images/weddings_and_events_gallery.webp";

export class Portfolio extends Component {
  render() {
    const portfolio = (
      <Section tag="Portfolio" subtitle="Take a look and see what we do">
        <p>
          "Our portfolios show just some of our work that we take great pride
          in. If you are looking to preview anything specifically, we can
          provide galleries that fit exactly what you're looking for."
        </p>
      </Section>
    );

    return (
      <Page>
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
      </Page>
    );
  }
}
