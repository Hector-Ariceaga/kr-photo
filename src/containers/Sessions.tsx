import React, { Component } from "react";
import { Section } from "../components/Section";
import {
  PageContent,
  LandscapeImageContainer,
  LandscapeImage,
  Description,
  Bold,
  SessionContentSection,
} from "../assets/styles/theme";
import family_portrait_forest from "../assets/images/family_portrait_forest.webp";

export class Sessions extends Component {
  render() {
    const sessions = (
      <Section tag="Sessions" subtitle="A package just for you">
        <Description>
          <ul>
            <li>
              <Bold>Portrait:</Bold> Focusing on just you and your beauty. Can
              include senior photos, head shots, or any portrait need you may
              have.
            </li>
            <li>
              <Bold>Family:</Bold> A great way to capture those forever memories
              with those closest to you. Kids, adults, pets, or a mixture-- we
              can put together something special.
            </li>
            <li>
              <Bold>Engagement and Couples:</Bold> You and your special person
              deserve to have your love captured forever. Whether it's for a
              'save the date' or just for a frame, we've got it covered.
            </li>
            <li>
              <Bold>Boudoir:</Bold> Boudoir sessions are a perfect thing to do
              for yourself or for someone special. It is a chance for you to
              feel absolutely stunning in your own skin.
            </li>
            <li>
              <Bold>Weddings and Events: </Bold> On your big day, you shouldn't
              have to worry at all about getting those perfect shots. We
              alleviate the stress and make sure your event is memorable, each
              and every day after.
            </li>
          </ul>
        </Description>
      </Section>
    );

    const sessionFiles = (
      <Section
        tag="Sessions"
        subtitle="Information to let you make the most your session"
      >
        <p>Two rows of icons here</p>
      </Section>
    );

    const askUs = (
      <Section subtitle="Ask us about our pricing lists and packages to fit just what you need"></Section>
    );
    return (
      <PageContent>
        <LandscapeImageContainer>
          <LandscapeImage
            src={family_portrait_forest}
            alt="family portrait in forest"
          />
        </LandscapeImageContainer>

        {sessions}

        <SessionContentSection>{sessionFiles}</SessionContentSection>

        <SessionContentSection>{askUs}</SessionContentSection>
      </PageContent>
    );
  }
}
