import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond&display=swap');
    font-family:'Cormorant Garamond', sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        
      </Router>
    </>
    
  );
}

export default App;
