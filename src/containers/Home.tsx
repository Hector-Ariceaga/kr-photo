import React, { Component } from "react";
import {
  PageContent,
  TallImageContainer,
  TallImagePreview,
  TwoPortrait,
  LandscapeImageContainer,
  LandscapeImage,
  Description,
} from "../assets/styles/theme";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import { Quote, Section } from "../components";

export class Home extends Component {
  render() {
    const testimonial = [
      {
        quote:
          "The headshots you tooks for Evil Dead! at 2nd Street Theater are some of the best work I've seen in town. They look fantastic! Great work, as always!",
        author: "Kara {Bend, OR}",
      },
      {
        quote:
          "Krystina, you are amazingly and artistically talented! We just got our photos and all I can say is wow! Stellar, stunning, beautiful and creative. The time and effort you put into our special day was more than we could've asked from the bottom of our hearts.",
        author: "Catherine {Bend, OR}",
      },
      {
        quote:
          "Krystina Rose Photography did the best job ever taking these photos! Still not sure how she got some of there amazing shots.",
        author: "Amber {Bend, OR}",
      },
    ];

    const quoteComponents = testimonial.map((test, id) => (
      <Quote id={id} quote={test.quote} author={test.author} />
    ));

    const goal = (
      <Section
        tag="OUR GOAL"
        subtitle="Capture each and every beautiful moment"
      >
        <Description>
          These days it's so easy to pull out your phone and take a photo, but
          you aren't able to be in the moment. Our goal at Krystina Rose
          Photography is to allow you to enjoy those memories to the fullest and
          let us capture them so you can cherish them for a lifetime.
        </Description>
      </Section>
    );

    const clients = (
      <Section tag="OUR CLIENTS" subtitle="The happiness of our clients is key">
        {quoteComponents}{" "}
      </Section>
    );

    return (
      <PageContent>
        {goal}

        <TwoPortrait>
          <TallImageContainer inputWidth="50%">
            <TallImagePreview src={image1} alt="wedding photo" />
          </TallImageContainer>
          <TallImageContainer inputWidth="50%">
            <TallImagePreview src={image2} alt="mansion exterior" />
          </TallImageContainer>
        </TwoPortrait>

        {clients}

        <LandscapeImageContainer>
          <LandscapeImage src={image3} alt="family photo" />
        </LandscapeImageContainer>
      </PageContent>
    );
  }
}
