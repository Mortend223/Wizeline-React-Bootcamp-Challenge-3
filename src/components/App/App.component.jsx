import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import HomePage from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Private from "../Private";
import Layout from "../Layout";

// Provider
import DataProvider from "../../providers/DataGlobal/DataGlobal.provider";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/notes">
              <HomePage />
            </Route>
            <Route exact path="/archived"></Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
