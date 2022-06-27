import React from "react";
import { Redirect, Route, Switch } from 'react-router';
import './App.scss';
import Main from "./components/Main";

function App() {
  return (
    <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Redirect to="/" />
      </Switch>
  );
}

export default App;
