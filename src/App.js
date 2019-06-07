import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Sessions from './containers/Sessions'
import Portfolio from './containers/Portfolio'
import About from './containers/About'
import Contact from './containers/Contact'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { createGlobalStyle } from "styled-components";
import { Site } from './assets/styleSheets/theme.js'

const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond|Montserrat|EB+Garamond|Tangerine|Lateef&display=swap');
    font-family:'Cormorant Garamond', 'Montserrat', 'Tangerine', 'Lateef', 'EB Garamond', sans-serif, cursive;
  }
`

function App() {
  return (
    <Site>
      <GlobalStyles />
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/sessions' component={Sessions} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/about' component={About}>About Us</Route>
          <Route exact path='/contact' component={Contact}>Contact Us</Route>
        </Switch>

        <Footer />
      </Router>
    </Site>
  );
}

export default App;
