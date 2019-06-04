import React, { Component } from 'react';
import { PageContent } from '../assets/styleSheets/theme'
import buildSection from '../components/buildSection';

export default class Portfolio {
  render() {

    const portfolio = buildSection(
      "Portfolio",
      "Take a look and see what we do",
      "Our portfolios show just some of our work that we take great pride in. If you are looking to preview anything specifically, we can provide galleries that fit exactly what you're looking for."
    )

    return(
      <PageContent>
        {portfolio}

      </PageContent>
    )
  }
}
