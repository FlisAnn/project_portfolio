import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hello from './components/Hello'
import About from "./components/About";
import Projects from "./components/Projects";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="about" component={About}></Route>
        <Route exact path="projects" component={Projects}></Route>
        <Hello />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
