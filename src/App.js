import React from "react";
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
function App() {
  return (
    <Switch>
        <Route exact path="/">
          <Header/>
          <TinderCards/>
        </Route>
        <Redirect to="/" />
      </Switch>
  );
}

export default App;
