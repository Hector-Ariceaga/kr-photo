import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import { createGlobalStyle } from "styled-components";
import { Site } from './assets/styleSheets/theme.js'

const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond&display=swap');
    font-family:'Cormorant Garamond', sans-serif;
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
        </Switch>
        
      </Router>
    </Site>
    
  );
}

export default App;
