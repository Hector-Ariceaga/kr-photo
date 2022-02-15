import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyles, Site } from "./assets/styles/theme";
import { NavBar, Footer } from "./components";
import { About, Contact, Home, Portfolio, Sessions } from "./containers";

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
      </Router>
      <Footer />
    </Site>
  );
}

export default App;
