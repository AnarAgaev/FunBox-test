import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "../pages/main";
import PageNotFound from "../pages/page-not-found";
import Spinner from "../spinner";
import "./app.scss";

const App = () => {
  return (
    <>
      <main className="main">
        <Switch>
          <Route path="/" component={ Main } exact />
          <Route path="/page-not-found" component={ PageNotFound } />
          <Redirect to="/page-not-found" />
        </Switch>
      </main>
      <Spinner />
    </>
  );
};

export default App;