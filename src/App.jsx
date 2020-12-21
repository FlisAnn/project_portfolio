import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import DisplayProjects from "./components/DisplayProjects";
import DisplayResume from './components/DisplayResume'
import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={About}></Route>
        <Route exact path="projects" component={DisplayProjects}></Route>
        <Route exact path="resume" component={DisplayResume}></Route>
        <About />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
