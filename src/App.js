import React from "react";
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import TinderCards from "./components/TinderCards";
import PassList from "./components/PassList";

function App() {
  return (
    <Switch>
        <Route exact path="/">
          <TinderCards/>
          {/* <PassList/> */}
        </Route>
        <Redirect to="/" />
      </Switch>
  );
}

export default App;
