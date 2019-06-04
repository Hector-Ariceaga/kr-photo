import React, { Component } from 'react';
import { PageContent, TallImagePreview, TwoPortrait, LandscapeImageContainer, LandscapeImage, Description } from '../assets/styleSheets/theme.js'
import image1 from '../assets/images/image1.webp'
import image2 from '../assets/images/image2.webp'
import image3 from '../assets/images/image3.webp'
import buildSection from '../components/buildSection.js';
import buildQuote from '../components/buildQuote.js';

export default class Home extends Component {
  
  render() {

    const testimonial = [
      {quote: "The headshots you tooks for Evil Dead! at 2nd Street Theater are some of the best work I've seen in town. They look fantastic! Great work, as always!", author: "Kara {Bend, OR}"}, 
      {quote: "Krystina, you are amazingly and artistically talented! We just got our photos and all I can say is wow! Stellar, stunning, beautiful and creative. The time and effort you put into our special day was more than we could've asked from the bottom of our hearts.", author: "Catherine {Bend, OR}"},
      {quote: "Krystina Rose Photography did the best job ever taking these photos! Still not sure how she got some of there amazing shots.", author: "Amber {Bend, OR}"}
    ]

    const quoteComponents = testimonial.map((test, id) => buildQuote(id, test.quote, test.author))

    const goal = buildSection(
      "OUR GOAL", 
      "Capture each and every beautiful moment",
      <Description>
        These days it's so easy to pull out your phone and take a photo, 
        but you aren't able to be in the moment. Our goal at Krystina Rose Photography 
        is to allow you to enjoy those memories to the fullest and let us capture them 
        so you can cherish them for a lifetime.
      </Description>
    )

    const clients = buildSection(
      "OUR CLIENTS",
      "The happiness of our clients is key",
      quoteComponents
    )

    return(
      <PageContent>

        {goal}

        <TwoPortrait>
          <TallImagePreview src={image1} alt="wedding photo" />
          <TallImagePreview src={image2} alt="mansion exterior" />
        </TwoPortrait>

        {clients}

        <LandscapeImageContainer>
          <LandscapeImage src={image3} alt='family photo' />
        </LandscapeImageContainer>

      </PageContent>
    )
  }
}