import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';



function App() {
  return (
    <div>
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      
    </Router>
    </div>
    
  );
}

export default App;
