import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import { Site } from "./assets/styles/theme";
import { NavBar, Footer } from "./components";
import { About, Contact, Home, Portfolio, Sessions } from "./containers";

const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond|Montserrat|EB+Garamond|Tangerine|Lateef&display=swap');
    font-family:'Cormorant Garamond', 'Montserrat', 'Tangerine', 'Lateef', 'EB Garamond', sans-serif, cursive;
  }
`;

function App() {
  return (
    <Site>
      <GlobalStyles />
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sessions" component={Sessions} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About}>
            About Us
          </Route>
          <Route exact path="/contact" component={Contact}>
            Contact Us
          </Route>
        </Switch>

        <Footer />
      </Router>
    </Site>
  );
}

export default App;
