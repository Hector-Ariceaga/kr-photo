import React, { Component } from 'react';
import buildSection from '../components/buildSection'
import { PageContent, LandscapeImageContainer, LandscapeImage, Description, Bold, SessionContentSection} from '../assets/styleSheets/theme.js'
import family_portrait_forest from '../assets/images/family_portrait_forest.webp'

export default class Sessions extends Component {

  render() {

    const sessions = buildSection(
      "Sessions", 
      "A Package just for you",
      <Description>
        <ul>
          <li>
            <Bold>Portrait:</Bold> Focusing on just you and your beauty. Can include senior photos, head shots, or any portrait need you may have. 
          </li>
          <li>
            <Bold>Family:</Bold> A great way to capture those forever memories with those closest to you. Kids, adults, pets, or a mixture-- we can put together something special.
          </li>
          <li>
            <Bold>Engagement and Couples:</Bold> You and your special person deserve to have your love captured forever. Whether it's for a 'save the date' or just for a frame, we've got it covered.
          </li>
          <li>
            <Bold>Boudoir:</Bold> Boudoir sessions are a perfect thing to do for yourself or for someone special. It is a chance for you to feel absolutely stunning in your own skin. 
          </li>
          <li>
            <Bold>Weddings and Events: </Bold> On your big day, you shouldn't have to worry at all about getting those perfect shots. We alleviate the stress and make sure your event is memorable, each and every day after.
          </li>
        </ul>
      </Description>
    )

    const sessionFiles = buildSection(
      "Sessions",
      "Information to let you make the most of your session",
      "TWO ROWS OF ICONS HERE"
    )

    const askUs = buildSection(
      "",
      "Ask us about our pricing lists and packages to fit just what you need",
      ""
    )

    return(
      <PageContent>
        <LandscapeImageContainer>
          <LandscapeImage src={family_portrait_forest} alt="family portrait in forest" />
        </LandscapeImageContainer>

        {sessions}

        <SessionContentSection>
          {sessionFiles}
        </SessionContentSection>

        <SessionContentSection>
          {askUs}
        </SessionContentSection> 
      </PageContent>
    )
  }
}

