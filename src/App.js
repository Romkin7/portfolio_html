import React from 'react';
import { Switch,  Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Cv from "./components/Cv";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact render={() => <Main title="Roman Tuomisto Portfolio" leadin="FullStack Web Develpoer" />}></Route>
          <Route path="/cv" render={() => <Cv title="Roman Tuomisto CV" />}></Route>
          <Route path="/contact" render={() => <Contact title="Roman Tuomisto Contact Me" />}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
